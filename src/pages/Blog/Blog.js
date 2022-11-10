import React from 'react';
import logo1 from '../../assets/images/sqlnosql.jpg';
import logo2 from '../../assets/images/jwt.png';
import logo3 from '../../assets/images/js vs node.jpg';
import logo4 from '../../assets/images/nodejs.png';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-6 w-full '>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
            <figure><img src={logo1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                <div className="badge badge-secondary">01</div>
                Difference between SQL and NoSQL
                </h2>
                <p>There are five practical differences between SQL and NoSQL:</p>
                <p>1.Language: SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>
                <p>2.Scalability: Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</p>
                <p>3.Structure: SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.NoSQL databases need not stick to this format, but generally fit into one of four broad categories</p>
                <p>4.Properties: At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:</p>
                <p>5.Support and communities: SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.</p>
                
            </div>
            </div>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
            <figure><img src={logo2} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                <div className="badge badge-secondary">02</div>
                What is JWT, and how does it work?
                </h2>
                <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
            </div>
            </div>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
            <figure><img src={logo3} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                <div className="badge badge-secondary">03</div>
                What is the difference between javascript and NodeJS?
                </h2>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                <p>Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                <p>A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</p>
            </div>
            </div>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
            <figure><img src={logo4} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                <div className="badge badge-secondary">04</div>
                How does NodeJS handle multiple requests at the same time?
                </h2>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                <p>A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.The cluster module allows easy creation of child processes that all share the same server ports.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;