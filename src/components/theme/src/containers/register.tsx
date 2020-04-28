import React from "react"
import Register from "../components/register"

const RegisterContainer = props => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <Register {...props} />
        </div>
      </div>
    </section>
  )
}

export default RegisterContainer
