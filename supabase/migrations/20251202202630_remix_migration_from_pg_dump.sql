CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: app_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.app_role AS ENUM (
    'admin',
    'user'
);


--
-- Name: change_user_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.change_user_role(_user_id uuid, _new_role public.app_role) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Atomic UPSERT operation
  INSERT INTO user_roles (user_id, role)
  VALUES (_user_id, _new_role)
  ON CONFLICT (user_id, role) 
  DO UPDATE SET role = EXCLUDED.role
  WHERE user_roles.user_id = _user_id;
  
  -- Delete old roles that don't match the new one
  DELETE FROM user_roles 
  WHERE user_id = _user_id AND role != _new_role;
END;
$$;


--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  
  -- Assign default 'user' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;


--
-- Name: has_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;


--
-- Name: update_access_requests_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_access_requests_updated_at() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: access_requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.access_requests (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    reviewed_by uuid,
    reviewed_at timestamp with time zone,
    admin_notes text,
    CONSTRAINT access_requests_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text])))
);


--
-- Name: contact_form_submissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact_form_submissions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    firm text NOT NULL,
    aum text,
    accreditation text,
    message text,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: investor_inquiries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.investor_inquiries (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    full_name text NOT NULL,
    email text NOT NULL,
    company text,
    phone text,
    aum text,
    accreditation_status text,
    message text,
    status text DEFAULT 'new'::text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: investor_questionnaire_responses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.investor_questionnaire_responses (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text,
    full_name text,
    investment_entity text NOT NULL,
    investment_range text NOT NULL,
    investment_timeline text NOT NULL,
    storage_experience text NOT NULL,
    investment_goals text NOT NULL,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    company_name text NOT NULL,
    address text NOT NULL,
    state text NOT NULL,
    zip text NOT NULL,
    phone text NOT NULL,
    is_qualified_institutional boolean NOT NULL,
    admin_notes text
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    email text NOT NULL,
    full_name text,
    company text,
    aum text,
    accreditation_status text,
    phone text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: scheduled_calls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.scheduled_calls (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    company text,
    investment_amount text,
    notes text,
    preferred_date date NOT NULL,
    preferred_time text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_activity; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_activity (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    activity_type text NOT NULL,
    activity_data jsonb,
    ip_address text,
    user_agent text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    role public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: access_requests access_requests_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.access_requests
    ADD CONSTRAINT access_requests_email_key UNIQUE (email);


--
-- Name: access_requests access_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.access_requests
    ADD CONSTRAINT access_requests_pkey PRIMARY KEY (id);


--
-- Name: contact_form_submissions contact_form_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_form_submissions
    ADD CONSTRAINT contact_form_submissions_pkey PRIMARY KEY (id);


--
-- Name: investor_inquiries investor_inquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investor_inquiries
    ADD CONSTRAINT investor_inquiries_pkey PRIMARY KEY (id);


--
-- Name: investor_questionnaire_responses investor_questionnaire_responses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investor_questionnaire_responses
    ADD CONSTRAINT investor_questionnaire_responses_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: scheduled_calls scheduled_calls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scheduled_calls
    ADD CONSTRAINT scheduled_calls_pkey PRIMARY KEY (id);


--
-- Name: user_activity user_activity_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_activity
    ADD CONSTRAINT user_activity_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);


--
-- Name: idx_contact_submissions_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_contact_submissions_created_at ON public.contact_form_submissions USING btree (created_at DESC);


--
-- Name: idx_contact_submissions_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_contact_submissions_user_id ON public.contact_form_submissions USING btree (user_id);


--
-- Name: idx_investor_inquiries_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_investor_inquiries_created_at ON public.investor_inquiries USING btree (created_at DESC);


--
-- Name: idx_investor_inquiries_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_investor_inquiries_status ON public.investor_inquiries USING btree (status);


--
-- Name: idx_investor_questionnaire_admin_notes; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_investor_questionnaire_admin_notes ON public.investor_questionnaire_responses USING btree (admin_notes) WHERE (admin_notes IS NOT NULL);


--
-- Name: idx_profiles_email; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_profiles_email ON public.profiles USING btree (email);


--
-- Name: idx_questionnaire_responses_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_questionnaire_responses_created_at ON public.investor_questionnaire_responses USING btree (created_at DESC);


--
-- Name: idx_questionnaire_responses_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_questionnaire_responses_user_id ON public.investor_questionnaire_responses USING btree (user_id);


--
-- Name: idx_user_activity_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_activity_created_at ON public.user_activity USING btree (created_at DESC);


--
-- Name: idx_user_activity_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_activity_user_id ON public.user_activity USING btree (user_id);


--
-- Name: idx_user_roles_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_roles_user_id ON public.user_roles USING btree (user_id);


--
-- Name: access_requests update_access_requests_timestamp; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_access_requests_timestamp BEFORE UPDATE ON public.access_requests FOR EACH ROW EXECUTE FUNCTION public.update_access_requests_updated_at();


--
-- Name: access_requests access_requests_reviewed_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.access_requests
    ADD CONSTRAINT access_requests_reviewed_by_fkey FOREIGN KEY (reviewed_by) REFERENCES auth.users(id);


--
-- Name: contact_form_submissions contact_form_submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_form_submissions
    ADD CONSTRAINT contact_form_submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: investor_inquiries investor_inquiries_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investor_inquiries
    ADD CONSTRAINT investor_inquiries_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: investor_questionnaire_responses investor_questionnaire_responses_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.investor_questionnaire_responses
    ADD CONSTRAINT investor_questionnaire_responses_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: scheduled_calls scheduled_calls_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scheduled_calls
    ADD CONSTRAINT scheduled_calls_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_activity user_activity_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_activity
    ADD CONSTRAINT user_activity_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_roles Admins can manage all roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage all roles" ON public.user_roles USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: access_requests Admins can update access requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update access requests" ON public.access_requests FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: contact_form_submissions Admins can update all contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update all contact submissions" ON public.contact_form_submissions FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: investor_inquiries Admins can update all inquiries; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update all inquiries" ON public.investor_inquiries FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: profiles Admins can update all profiles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update all profiles" ON public.profiles FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: investor_questionnaire_responses Admins can update all questionnaire responses; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update all questionnaire responses" ON public.investor_questionnaire_responses FOR UPDATE USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: scheduled_calls Admins can update all scheduled calls; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update all scheduled calls" ON public.scheduled_calls FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: access_requests Admins can view all access requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all access requests" ON public.access_requests FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: user_activity Admins can view all activity; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all activity" ON public.user_activity FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: contact_form_submissions Admins can view all contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all contact submissions" ON public.contact_form_submissions FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: investor_inquiries Admins can view all inquiries; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all inquiries" ON public.investor_inquiries FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: profiles Admins can view all profiles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: investor_questionnaire_responses Admins can view all questionnaire responses; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all questionnaire responses" ON public.investor_questionnaire_responses FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: user_roles Admins can view all roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: scheduled_calls Admins can view all scheduled calls; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all scheduled calls" ON public.scheduled_calls FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: access_requests Anyone can submit access requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can submit access requests" ON public.access_requests FOR INSERT WITH CHECK (true);


--
-- Name: contact_form_submissions Deny anonymous SELECT on contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny anonymous SELECT on contact submissions" ON public.contact_form_submissions AS RESTRICTIVE FOR SELECT TO anon USING (false);


--
-- Name: investor_inquiries Deny anonymous SELECT on investor inquiries; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny anonymous SELECT on investor inquiries" ON public.investor_inquiries AS RESTRICTIVE FOR SELECT TO anon USING (false);


--
-- Name: profiles Deny anonymous SELECT on profiles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny anonymous SELECT on profiles" ON public.profiles AS RESTRICTIVE FOR SELECT TO anon USING (false);


--
-- Name: investor_questionnaire_responses Deny anonymous SELECT on questionnaire responses; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny anonymous SELECT on questionnaire responses" ON public.investor_questionnaire_responses AS RESTRICTIVE FOR SELECT TO anon USING (false);


--
-- Name: scheduled_calls Deny anonymous SELECT on scheduled calls; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny anonymous SELECT on scheduled calls" ON public.scheduled_calls AS RESTRICTIVE FOR SELECT TO anon USING (false);


--
-- Name: user_activity Only admins can SELECT user activity; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Only admins can SELECT user activity" ON public.user_activity AS RESTRICTIVE FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: investor_inquiries Users can create inquiries with correct user_id; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create inquiries with correct user_id" ON public.investor_inquiries FOR INSERT WITH CHECK ((((auth.uid() IS NULL) AND (user_id IS NULL)) OR (auth.uid() = user_id)));


--
-- Name: scheduled_calls Users can create their own scheduled calls; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create their own scheduled calls" ON public.scheduled_calls FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: user_activity Users can insert their own activity; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own activity" ON public.user_activity FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: contact_form_submissions Users can submit contact forms with correct user_id; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can submit contact forms with correct user_id" ON public.contact_form_submissions FOR INSERT WITH CHECK ((((auth.uid() IS NULL) AND (user_id IS NULL)) OR (auth.uid() = user_id)));


--
-- Name: investor_questionnaire_responses Users can submit questionnaire with correct user_id; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can submit questionnaire with correct user_id" ON public.investor_questionnaire_responses FOR INSERT WITH CHECK ((((auth.uid() IS NULL) AND (user_id IS NULL)) OR (auth.uid() = user_id)));


--
-- Name: profiles Users can update own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING ((auth.uid() = id));


--
-- Name: investor_inquiries Users can view own inquiries; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own inquiries" ON public.investor_inquiries FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: profiles Users can view own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING ((auth.uid() = id));


--
-- Name: user_roles Users can view own roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: contact_form_submissions Users can view their own contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own contact submissions" ON public.contact_form_submissions FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: investor_questionnaire_responses Users can view their own questionnaire responses; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own questionnaire responses" ON public.investor_questionnaire_responses FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: scheduled_calls Users can view their own scheduled calls; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own scheduled calls" ON public.scheduled_calls FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: access_requests; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

--
-- Name: contact_form_submissions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

--
-- Name: investor_inquiries; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.investor_inquiries ENABLE ROW LEVEL SECURITY;

--
-- Name: investor_questionnaire_responses; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.investor_questionnaire_responses ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: scheduled_calls; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.scheduled_calls ENABLE ROW LEVEL SECURITY;

--
-- Name: user_activity; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY;

--
-- Name: user_roles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


