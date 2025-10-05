import { supabase } from "@/integrations/supabase/client";

export const logActivity = async (
  userId: string,
  activityType: string,
  activityData?: Record<string, any>
) => {
  try {
    const { error } = await supabase.from("user_activity").insert({
      user_id: userId,
      activity_type: activityType,
      activity_data: activityData,
    });

    if (error) {
      console.error("Error logging activity:", error);
    }
  } catch (error) {
    console.error("Error logging activity:", error);
  }
};
