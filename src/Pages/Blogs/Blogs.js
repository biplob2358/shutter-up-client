import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="mt-4 ">
      {/* q-1  */}
      <div className="card w-full mb-4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q1.Difference between SQL and NoSQL</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td> Non-relational or distributed database system.</td>
                </tr>
                <tr>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td> They have dynamic schema</td>
                </tr>
                <tr>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <td>
                    <span className="font-bold">Examples:</span> MySQL,
                    PostgreSQL, Oracle, MS-SQL Server etc
                  </td>
                  <td>
                    <span className="font-bold"> Examples:</span> MongoDB,
                    GraphQL, HBase, Neo4j, Cassandra etc
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* q-2  */}
      <div className="card mb-4 w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q2.What is JWT, and how does it work?</h2>
          <p>
            JWT or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            <br />
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <br />
            1.User sign-in using username and password or google/facebook.{" "}
            <br />
            2.Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key.
            <br />
            3.User’s Client uses the JWT to access protected resources by
            passing the JWT in HTTP Authorization header.
            <br />
            4.Resource server then verifies the authenticity of the token using
            the secret salt/ public key.
          </p>
        </div>
      </div>
      {/* q-3  */}
      <div className="card w-full mb-4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            1.JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. <br /> <br />
            2. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
            <br /> <br />
            3. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported.
            <br /> <br />
            4. A specific non-blocking operation is required to access any
            operating system. There are a few essential objects in JavaScript,
            but they are entirely OS-specific. Node.js, on the other hand, can
            now operate non-blocking software tasks out of any JavaScript
            programming. It contains no OS-specific constants. Node.js
            establishes a strong relationship with the system files, allowing
            companies to read and write to the hard drive.
          </p>
        </div>
      </div>
      {/* q-4  */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Q4.How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
