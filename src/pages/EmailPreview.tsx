const EmailPreview = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Preview</h2>
          <p className="text-sm text-gray-600 mb-8">
            This is how the welcome email appears to new registrants
          </p>
        </div>
        
        {/* Email Preview */}
        <div style={{ backgroundColor: '#f6f9fc', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif' }}>
          <div style={{ backgroundColor: '#ffffff', margin: '0 auto', padding: '20px 0 48px', marginBottom: '64px', maxWidth: '600px' }}>
            <h1 style={{ color: '#1a365d', fontSize: '32px', fontWeight: 'bold', margin: '40px 0', padding: '0', textAlign: 'center' }}>
              Welcome to StorageBlue Growth Fund
            </h1>
            
            <div style={{ padding: '0 24px' }}>
              <p style={{ color: '#333', fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                Dear [Full Name],
              </p>
              
              <p style={{ color: '#333', fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                Thank you for registering with the StorageBlue Growth Fund Investor Portal. 
                Your account has been successfully created and you now have access to exclusive 
                investment opportunities and market insights.
              </p>
              
              <div style={{ padding: '24px', border: '1px solid #dedede', borderRadius: '5px', margin: '24px 0' }}>
                <h2 style={{ color: '#1a365d', fontSize: '24px', fontWeight: 'bold', margin: '30px 0 15px' }}>
                  About StorageBlue Growth Fund
                </h2>
                <p style={{ color: '#333', fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                  StorageBlue Growth Fund is a premier institutional-grade investment vehicle 
                  focused on self-storage assets with measurable growth potential in key markets 
                  across the United States.
                </p>
              </div>
              
              <div style={{ padding: '24px', border: '1px solid #dedede', borderRadius: '5px', margin: '24px 0' }}>
                <h2 style={{ color: '#1a365d', fontSize: '24px', fontWeight: 'bold', margin: '30px 0 15px' }}>
                  What&apos;s Next?
                </h2>
                <p style={{ color: '#333', fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                  You can now access:
                </p>
                <ul style={{ margin: '16px 0', paddingLeft: '20px' }}>
                  <li style={{ margin: '8px 0', color: '#333', fontSize: '16px', lineHeight: '24px' }}>
                    Our current portfolio and performance metrics
                  </li>
                  <li style={{ margin: '8px 0', color: '#333', fontSize: '16px', lineHeight: '24px' }}>
                    Detailed market analysis and insights
                  </li>
                  <li style={{ margin: '8px 0', color: '#333', fontSize: '16px', lineHeight: '24px' }}>
                    Investment strategies and opportunities
                  </li>
                  <li style={{ margin: '8px 0', color: '#333', fontSize: '16px', lineHeight: '24px' }}>
                    Executive leadership profiles
                  </li>
                  <li style={{ margin: '8px 0', color: '#333', fontSize: '16px', lineHeight: '24px' }}>
                    Investor resources and documentation
                  </li>
                </ul>
              </div>
              
              <div style={{ padding: '24px', border: '1px solid #dedede', borderRadius: '5px', margin: '24px 0' }}>
                <a
                  href="https://sb-growth-spark.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#1a365d',
                    borderRadius: '5px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    padding: '12px 20px',
                    margin: '16px 0'
                  }}
                >
                  Access Investor Portal
                </a>
              </div>
              
              <p style={{ color: '#333', fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                If you have any questions or need assistance, please don&apos;t hesitate to reach out 
                to our team.
              </p>
              
              <p style={{ color: '#666666', fontSize: '14px', lineHeight: '24px', marginTop: '32px', textAlign: 'center' }}>
                Best regards,<br />
                The StorageBlue Growth Fund Team<br />
                <a href="mailto:info@storagebluegrowthfund.com" style={{ color: '#0066cc', textDecoration: 'underline' }}>
                  info@storagebluegrowthfund.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
