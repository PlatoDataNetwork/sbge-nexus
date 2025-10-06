import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface WelcomeEmailProps {
  fullName: string
  email: string
}

export const WelcomeEmail = ({ fullName, email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to StorageBlue Growth Fund Investor Portal</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to StorageBlue Growth Fund</Heading>
        
        <Text style={text}>
          Dear {fullName},
        </Text>
        
        <Text style={text}>
          Thank you for registering with the StorageBlue Growth Fund Investor Portal. 
          Your account has been successfully created and you now have access to exclusive 
          investment opportunities and market insights.
        </Text>
        
        <Section style={section}>
          <Heading style={h2}>About StorageBlue Growth Fund</Heading>
          <Text style={text}>
            StorageBlue Growth Fund is a premier institutional-grade investment vehicle 
            focused on self-storage assets with measurable growth potential in key markets 
            across the United States.
          </Text>
        </Section>
        
        <Section style={section}>
          <Heading style={h2}>What's Next?</Heading>
          <Text style={text}>
            You can now access:
          </Text>
          <ul style={list}>
            <li style={listItem}>Our current portfolio and performance metrics</li>
            <li style={listItem}>Detailed market analysis and insights</li>
            <li style={listItem}>Investment strategies and opportunities</li>
            <li style={listItem}>Executive leadership profiles</li>
            <li style={listItem}>Investor resources and documentation</li>
          </ul>
        </Section>
        
        <Section style={section}>
          <Link
            href="https://sb-growth-spark.lovable.app"
            target="_blank"
            style={button}
          >
            Access Investor Portal
          </Link>
        </Section>
        
        <Text style={text}>
          If you have any questions or need assistance, please don't hesitate to reach out 
          to our team.
        </Text>
        
        <Text style={footer}>
          Best regards,<br />
          The StorageBlue Growth Fund Team<br />
          <Link href="mailto:info@storagebluegrowthfund.com" style={link}>
            info@storagebluegrowthfund.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const h1 = {
  color: '#1a365d',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#1a365d',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '30px 0 15px',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
}

const section = {
  padding: '24px',
  border: '1px solid #dedede',
  borderRadius: '5px',
  margin: '24px 0',
}

const list = {
  margin: '16px 0',
  paddingLeft: '20px',
}

const listItem = {
  margin: '8px 0',
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
}

const button = {
  backgroundColor: '#1a365d',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
  margin: '16px 0',
}

const link = {
  color: '#0066cc',
  textDecoration: 'underline',
}

const footer = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  marginTop: '32px',
  textAlign: 'center' as const,
}
