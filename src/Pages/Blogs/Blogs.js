import React from 'react';
import './Blog.css';
const Blogs = () => {
  return (
    <div className='container bg-dark text-light'>
      <h1 className='text-center'>Difference between javascript and nodejs</h1>
      <div className='hanif mb-5'>
        <div className=''>
          <img
            src='https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png'
            alt=''
            width='80%'
          />
        </div>
        <div className='m-auto'>
          <p>
            Javascript is a programming language and Nodejs is a runtime
            enviroment for Javascript. With Javascript we can build dynamic HTML
            pages with interactive effects on a webpage.On the other hand,
            Node.js usually represents a list of objects and methods accessible
            to JavaScript code when run in the V8 engine or via the node
            interpreter. Without browser javascript code can't be executed.We
            can use Node.js to execute and run the code outside of the
            browser.Node.js comes with a large number of modules and is mostly
            used in web creation with event-driven, non-blocking asynchronous
            I/O for creating highly scalable server-side JavaScript
            applications.
          </p>
        </div>
      </div>
      <h1 className='text-center'>
        Differences between sql and nosql databases.
      </h1>
      <div className='hanif mb-5'>
        <div className=''>
          <img
            src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png'
            alt=''
            width='80%'
          />
        </div>

        <div className='m-auto'>
          <p>
            With SQL we build Relational Database Management System (RDBMS) and
            with NOSQL we build Non-relational or distributed database system.In
            Sql the schema's are fixed on the other hand in nosql schemas are
            dynamic.SQL databases are vertically scalable and NoSQL databases
            are horizontally scalable. Sql databases use the sql language for
            query and nosql databases collection of documents are used to query
            the data.
          </p>
        </div>
      </div>

      <h1 className='text-center'>
        {' '}
        What is the purpose of jwt and how does it work
      </h1>
      <div className='hanif mb-5'>
        <div className=''>
          <img
            src='https://miro.medium.com/max/1170/1*AMeiWwTqbLAUe0bvdVTVLA.png'
            alt=''
            width='80%'
          />
        </div>
        <div className='m-auto'>
          <p>
            JWT is used for sharing security information between two parties — a
            client and a server. Basically, JWT contains encoded JSON objects,
            including a set of claims. It uses a cryptographic algorithm for
            which the token can't be altered. A jwt is a string made up of three
            parts, separated by dots (.), and serialized using base64. In the
            most common serialization format, compact serialization, the JWT
            looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will
            get two JSON strings: The header and the payload. The signature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
