
export default function Contact() {
  return (
    <section id="contact" className="bg-light py-3">
      <div className="container-lg mt-5">
        <div className="text-center">
          <h2>Get In Touch</h2>
          <p className="lead">Have a question? Let us know!</p>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form onSubmit={(e) => e.preventDefault()}>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill text-secondary"></i>
                  </span>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
              </div>
              {/* topic */}
              <label htmlFor="subject" className="form-label">What is your question about?</label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-chat-right-dots-fill text-secondary"></i>
                </span>
                <select className="form-select" id="subject" defaultValue={'general'}>
                  <option value="general">General Question</option>
                  <option value="returns">Returns</option>
                  <option value="billing">Billing</option>
                </select>
              </div>
              {/* message */}
              <div className="mb-4 mt-5 form-floating">
                <textarea className="form-control" id="message" style={{ height: '150px' }}></textarea>
                <label htmlFor="message">Your message...</label>
              </div>
              {/* submit button */}
              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
