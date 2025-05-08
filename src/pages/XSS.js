import React from 'react';
import { Link } from 'react-router-dom';
import xssImg from '../assets/images/Xss.jpg';
import xss2Img from '../assets/images/xss2.jpg';
import './XSS.css';

const XSS = () => {
  return (
    <div className="xss-container">
      <div className="xss-header">
        <div className="header-with-button">
          <h1>XSS - By Suresh Potharaboina</h1>
          <Link to="/blog" className="back-to-blogs-btn">
            Back to Blogs
          </Link>
        </div>
      </div>
      
      <div className="xss-content">
        <img src={xssImg} alt="XSS Attack Illustration" className="xss-main-image" />
        
        <section className="xss-section">
          <h2>XSS Introduction</h2>
          <p>
            Cross-site scripting, or XSS, is an injection attack that has long been considered a top 
            problem in the cybersecurity world. When an attacker injects malicious javascript code into 
            a web application, it is run under the victim's user accounts.
          </p>
        </section>

        <section className="xss-section">
          <h2>How cross-site scripting attacks work</h2>
          <img src={xss2Img} alt="XSS Attack Diagram" className="xss-section-image" />
          <p>
            Cross-site scripting is a client-side attack in which malicious source code, typically in 
            JavaScript, is injected into an application. The malicious code can be inserted in a variety of 
            methods. JavaScript provides the ability to access browser data such as cookies, session 
            tokens, and storage data. This data, like session tokens, can be used to impersonate 
            another individual if obtained. As a result, attackers attempt to gain access to sensitive data 
            by injecting JavaScript and directing it to themselves.
          </p>
          
          <p>Overall, the attacker has access to all of JavaScript's capabilities in this type of assault. Here are some acts that an attacker can perform:</p>
          <ul>
            <li>Stealing sensitive data (personal data, payment data, etc.)</li>
            <li>Redirection to phishing sites</li>
            <li>Performing unauthorized action by stealing session tokens</li>
          </ul>
        </section>

        <section className="xss-section">
          <h2>Types of XSS Attacks</h2>
          
          <h3>Reflected XSS</h3>
          <p>
            In a Reflected XSS attack, a web application extracts data (such as query strings) from a 
            URL and uses it in some way. The risk comes when an attacker creates a URL with 
            parameters containing an HTML script tag. If the program uses these parameters, such as 
            changing the DOM, the script may run, allowing the attacker to steal data or influence the 
            web application. This attack is significant because the target does not need to be a frequent 
            user of the application, they can simply click on a malicious link to be taken to the 
            compromised page. Furthermore, these attacks can propagate swiftly via open chats or 
            social media, emphasizing the significance of checking links before accessing them.
          </p>

          <h3>Stored XSS</h3>
          <p>
            A Stored XSS attack involves the attacker attempting to inject malicious scripts into the 
            application's system via input fields. These assaults frequently target forums or chats, where 
            scripts may be easily added and seen by other users. The server administrator is also at risk 
            in WordPress because the editor functions within a regular web interface as part of the 
            content management system, allowing the injected script to be executed. If successful, the 
            attacker exploits the vulnerability created by the failure to correctly escape the data.
          </p>

          <h3>DOM-based XSS</h3>
          <p>
            The DOM-based cross-site scripting attack, like the Reflected attack, occurs when the 
            application's DOM is changed. Again, the attacker attempts to inject and execute his code in 
            the web application, for example, by modifying the DOM. As a result, the code originates 
            from a source that he may control and alter as needed. As a result, the general use of 
            JavaScript functions like eval() is improper. eval() allows for parsing a string as JavaScript 
            code, which can be hazardous.
          </p>
        </section>

        <section className="xss-section">
          <h2>How to prevent XSS attacks?</h2>
          <p>
            XSS attacks can be prevented by various methods, but it is always vital to assess the extent 
            to which it is reasonable to restrict something in exchange for lowering the danger of an XSS 
            attack. This section discusses some strategies to prevent cross-site scripting attacks.
          </p>
          
          <h3>Disable JavaScript</h3>
          <p>
            As previously stated, XSS attacks may only occur when malicious JavaScript code is run on 
            the client side. As a result, turning off JavaScript in your browser is a secure way to defend 
            yourself from this attack. However, because today's web applications rely significantly on 
            JavaScript, many of them are likely to fail or work only partially.
          </p>

          <h3>Dynamic execution with JavaScript</h3>
          <p>
            Dynamically run JavaScript code can provide a security concern, as developers and 
            researchers have repeatedly stated, giving the eval() function as an example. This risk is 
            most visible in DOM manipulation, where JavaScript is frequently performed dynamically, 
            such as via the DOM element attribute innerHTML. With innerHTML, an attacker might inject 
            a code snippet including a script tag into the program. If the web application modifies a 
            DOM element using innerHTML and mistakenly communicates harmful code, the script tags 
            will execute it. Because innerHTML is frequently used for text modifications, it is preferable 
            to utilize safer alternatives such as Node.textContent, which can prevent such attacks while 
            still updating the text.
          </p>

          <h3>HTTP-Header X-XSS-Protection</h3>
          <p>
            The HTTP header X-XSS-Protection response header is a method of protecting against XSS 
            attacks that is supported by some browsers (Safari, Internet Explorer). When the browser 
            detects an XSS attack, it executes multiple defense measures depending on the parameters 
            in the response header. For example, the defense system may prohibit the web application 
            from loading or remove the insecure areas containing the XSS attack script.
          </p>
          <pre className="code-block">
            X-XSS-Protection:0
            X-XSS-Protection:1
            X-XSS-Protection: 1; mode=block
          </pre>
          <p>
            The 0 or 1 indicates whether the protective filtering should be turned off or on (0 = off, 1 = 
            on), and the information following the semicolon specifies how to respond in the event of an 
            attempted injection. So, in the example with the block, not only is the injected script deleted 
            (sanitized), but the page itself is blocked from loading.
          </p>

          <h3>Content Security Policy</h3>
          <p>
            A Content Security Policy (CSP) protects web applications from injection threats such as 
            XSS. It requires the browser to only load scripts from trusted sites. If a script from an 
            unapproved source is identified, the browser will prevent it. To enable CSP, the server must 
            return a Content-Security-Policy HTTP header, which is often configured by the server 
            administrator to allow only trusted domains, such as the server's own, to load scripts.
          </p>
          <pre className="code-block">
            "Content-Security-Policy: default-src 'self' "
          </pre>
        </section>

        <section className="xss-section">
          <h2>Client-side XSS prevention</h2>
          <p>
            Many online applications are written in JavaScript, hence this is used as an example, 
            although the ideas underlying the security mechanism apply to many programming 
            languages and frameworks. A simple demonstration of an inserted code might look like this:
          </p>
          <pre className="code-block">
            var elment = document.getElementById('elment');
            var param = "Parameter";
            elment.innerHTML = 'code';
          </pre>
          <p>
            In this case, the attacker uses the fact that the innerHTML method parses the past 
            statement. Consider the possibility that the attacker could alter or pass that parameter.
          </p>
        </section>

        <section className="xss-section">
          <h2>Server-side XSS prevention</h2>
          <p>
            As previously stated, server-side security can be achieved through HTTP headers, but 
            programmatic protection is also an option. Using the example of WordPress and the 
            computer language PHP, which is used for WordPress development, it makes sense to 
            sanitize data, particularly data from input fields. Because PHP is rendered on the server, 
            the data that will be communicated can be sanitized before it is delivered. WordPress 
            provides several cleansing functions on its own. For example, an input containing a 
            malicious script can be defused using the following function call:
          </p>
          <pre className="code-block">
            $title = sanitize_text_field( $_POST['title'] );
            update_post_meta( $post-ID, 'title', $title );
          </pre>
          <p>
            When working with WordPress plugins, it is very crucial to investigate the plugins' sources (if 
            feasible, most of which are open source) to see if they take precautions to prevent code 
            injection. Especially with plugins with many input and management choices, an input field or 
            option can easily be ignored. neglected sanitizing is not uncommon; even some of the most 
            popular plugins neglected it and were exploited, as was the case with WooCommerce.
          </p>
        </section>

        <section className="xss-section">
          <h2>Conclusion</h2>
          <p>
            An attacker can swiftly and simply carry out XSS attacks, causing significant damage. Taking 
            safeguards as a developer is extremely simple and effective, as demonstrated. It is critical to 
            put yourself in the shoes of the attacker and consider how you may proceed and close these 
            vulnerabilities properly. Furthermore, it is critical to raise awareness among web developers 
            about this assault, as it remains one of the most popular, and many applications do not take 
            enough measures.
          </p>
        </section>

        <section className="xss-section">
          <h2>References</h2>
          <ul>
            <li><a href="https://portswigger.net/web-security/cross-site-scripting" target="_blank" rel="noopener noreferrer">PortSwigger Web Security</a></li>
            <li><a href="https://rb.gy/oax662" target="_blank" rel="noopener noreferrer">Additional Resource 1</a></li>
            <li><a href="https://rb.gy/zsmhru" target="_blank" rel="noopener noreferrer">Additional Resource 2</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default XSS; 