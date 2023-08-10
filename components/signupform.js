export default function Signup() {
    return (
        <div>
        <h2>Contact Me</h2>
        <p>If you want to reach out to me, please fill out this short form:</p>
        <form
          action="https://us21.list-manage.com/contact-form?u=1515e46b365e3e0a4ba10ee02&form_id=afcd78bd5ebe86a4cb160aecd111085d"
          method="post"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
            required
            style={{
              padding: '10px',
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginBottom: '10px'
            }}
          />
          <div style={{ position: 'absolute', left: '-5000px' }}>
            <input
              type="text"
              name="b_1515e46b365e3e0a4ba10ee02_5d75f76dc8"
              tabIndex="-1"
              value=""
            />
          </div>
          <input
            type="submit"
            value="Subscribe"
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF5733',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          />
        </form>
      </div>
      
    );
  }