import { useEffect } from "react";
import "../css/FeInterview.css";
const FeInterview = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <div className="fe-interview">
      <h1 style={{ marginTop: 0 }}>Frontend Interview</h1>

      <h1>Table of contents</h1>
      <ul class="toc">
        <li>
          <a href="#basic-level">List of questions at Basic Level</a>
          <ul className="toc">
            <li>
              <a href="#1">1. Difference between id and class in HTML/CSS</a>
            </li>
            <li>
              <a href="#2">2. Box model in CSS</a>
            </li>
            <li>
              <a href="#3">3. inline vs inline-block vs block element</a>
            </li>
            <li>
              <a href="#4">4. SEO (Search Engine Optimization)</a>
            </li>
            <li>
              <a href="#5">5. DOM (Document Object Model)</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#chapter2">
            <span class="title">Another sub-heading</span>
          </a>
        </li>
      </ul>

      <h1 id="basic-level">List of questions at Basic Level</h1>

      <h2 id="1">1. Difference between id and class in HTML/CSS</h2>
      <h3>Definition</h3>
      <p>
        The <b>id</b> attribute is a <b> unique identifier </b>that is used to
        specify the document. In CSS, the id attribute is written using the #
        symbol followed by id.
      </p>
      <p>
        The <b>class</b> attribute is used to specify
        <b> one or more class names </b>for an HTML element. The class attribute
        can be used on any HTML element. The class name in CSS stylesheet using
        “.” symbol.
      </p>
      <h3>In JavaScript</h3>
      <p>To uses document.getElementById() to access an element by id.</p>
      <p>
        To uses document.getElementsByClassName() to access elements by class.
      </p>
      <h3>In CSS</h3>
      <p>#id selects a specific element with that id.</p>
      <p>.class selects all elements with that class.</p>

      {/* ------------------------------------------------------ */}

      <h2 id="2">2. Box model in CSS</h2>
      <p>Content: The content of the box, where text and images appear</p>
      <p>
        Padding: Clears an area around the content. The padding is transparent
      </p>
      <p>Border: A border that goes around the padding and content</p>
      <p>
        Margin: Clears an area outside the border. The margin is transparent
      </p>
      <img
        alt=""
        src="https://miro.medium.com/v2/resize:fit:2560/1*nmdxvJbL2GI5NQSXCLOskA.png"
      />

      {/* ------------------------------------------------------ */}

      <h2 id="3">3. inline vs inline-block vs block element</h2>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <table className="inline-block">
          <tr>
            <th></th>
            <th>Inline</th>
            <th>Inline-block</th>
            <th>Block</th>
          </tr>
          <tr>
            <th>Settable width and height</th>
            <td>
              <img alt="" src="/resources/no.png" />
            </td>
            <td>
              <img alt="" src="/resources/yes.png" />
            </td>
            <td>
              <img alt="" src="/resources/yes.png" />
            </td>
          </tr>
          <tr>
            <th>Start elements on a new line</th>
            <td>
              <img alt="" src="/resources/no.png" />
            </td>
            <td>
              <img alt="" src="/resources/no.png" />
            </td>
            <td>
              <img alt="" src="/resources/yes.png" />
            </td>
          </tr>
          <tr>
            <th>Occupy width</th>
            <td>Just the width it requiress</td>
            <td>Just the width it requiress</td>
            <td>The full width available</td>
          </tr>
        </table>
      </div>
      <img
        alt=""
        src="https://cohesiondocs.acquia.com/sites/default/files/images/apply-styles/display-diagram-type-as-shape.svg"
        style={{ marginTop: "10px" }}
      />

      {/* ------------------------------------------------------ */}

      <h2 id="4">4. SEO (Search Engine Optimization)</h2>
      <h3>Definition</h3>
      <p>
        SEO - short for search engine optimization - is about helping search
        engines understand your content, and helping users find your site and
        make a decision about whether they should visit your site through a
        search engine.
      </p>
      <p>
        HTML tags are pieces of code you add to webpages to provide context to
        search engines. They help search engines determine what your site is
        about.{" "}
      </p>
      <h3>Why Are HTML Tags Important for SEO?</h3>
      <h4>Structure</h4>
      <p>HTML tags help you organize and format your content.</p>
      <p>
        This includes:
        <ul>
          <li>Headings</li>
          <li>Paragraphs</li>
          <li>Lists</li>
          <li>Tables</li>
        </ul>
      </p>
      <p>
        Search engines can better interpret and index your content with HTML
        tags.
      </p>
      <h4>Understanding</h4>
      <p>
        HTML SEO tags provide context to search engines about the purpose of
        different elements on your page.
        <br />
        By using relevant tags like &lt;title&gt;, &lt;meta&gt;, and
        &lt;alt&gt;, you help search engines understand the topic and purpose of
        your content.
      </p>
      <h4>Readability</h4>
      <p>
        HTML tags structure content visually for web visitors and search
        engines. Clear headings, bullet points, and well-formatted text make
        your pages easier to read. And help keep users engaged.
      </p>
      <h4>Keyword Optimization</h4>
      <p>
        HTML tags allow you to specify important keywords and phrases related to
        your content. Search engines can use these keywords to determine the
        relevance of your page to specific search queries.
      </p>
      <h3>
        What are some SEO best practices when structuring an HTML document?
      </h3>
      <p>
        Purely from the HTML side:
        <ul>
          <li>
            <b>Use Semantic HTML:</b> Use tags like &lt;header&gt;, &lt;nav&gt;,
            &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt;
            to provide meaningful structure.
          </li>
          <li>
            <b>Proper Heading Hierarchy:</b> Use headings (&lt;h1&gt; to
            &lt;h6&gt;) correctly, making sure &lt;h1&gt; is used once per page
            for the main title, followed by &lt;h2&gt;, &lt;h3&gt;, etc.
          </li>
          <li>
            <b>Meta Tags:</b> Include relevant &lt;meta&gt; tags, such as
            description, keywords, and viewport, to provide metadata about the
            website.
          </li>
          <li>
            <b>Alt Attributes on images:</b> Use alt attributes for images to
            describe the content, improving accessibility and search engine
            understanding.
          </li>
        </ul>
      </p>
      <p>
        On top of that:
        <ul>
          <li>
            <b>Internal Linking</b>: Make sure to use internal links to connect
            content within your web site, helping search engines crawl and
            understand the site structure.{" "}
          </li>
          <li>
            <b>Mobile-Friendly Design</b>: Code your site and CSS with a
            mobile-first mindset. Ensuring the site is responsive and
            mobile-friendly to improve user experience and ranking on search
            engines.{" "}
          </li>
          <li>
            <b>Fast Loading Times</b>: Try to optimize images, use efficient
            code, and leverage caching to improve page load speeds. The faster
            the page loads, the bigger the advantage it'll have against other
            similar results on the SERP (search engine results page).{" "}
          </li>
        </ul>
      </p>
      <blockquote style={{ fontSize: "17px" }}>
        For more information, go to{" "}
        <a href="https://www.semrush.com/blog/html-tags-for-seo/">
          12 SEO HTML Tags You Need to Know
        </a>
      </blockquote>

      {/* ------------------------------------------------------ */}

      <h2 id="5">5. DOM (Document Object Model)</h2>
      <h3>Definition</h3>
      <p>
        The Document Object Model (DOM) is an API for web documents. It
        represents the structure of an HTML web page as a tree of nodes, where
        each node corresponds to a part of the document (i.e. an element, an
        attribute, or text).
      </p>
      <p>
        The W3C Dom standard is divided into three different parts:
        <ul>
          <li>Core DOM - standard model for all document types</li>
          <li>XML DOM - standard model for XML documents</li>
          <li>HTML DOM - standard model for HTML documents</li>
        </ul>
      </p>
      <p>
        For example:
        <img alt="" src="https://www.w3schools.com/whatis/img_htmltree.gif" />
      </p>
      <h3>Finding HTML Elements with JavaScript</h3>
      <p>
        When you want to access HTML elements with JavaScript, you have to find
        the elements first. <br />
      </p>
      <p>
        There are a couple of ways to do this:
        <ul>
          <li>
            Finding HTML elements by id:
            <code className="language-javascript">
              const element = document.getElementById("myDiv");
            </code>
            <br />
            <code className="language-javascript">
              // Return: &lt;div id="myDiv"&gt;Hello&lt;/div&gt;
            </code>
          </li>
          <li>
            Finding HTML elements by tag name:{" "}
            <code className="language-javascript">
              var x = document.getElementsByTagName("p");
            </code>
            <br />
            <code className="language-javascript">
              {" "}
              // Return: HTMLCollection [ &lt;p&gt;Paragraph 1&lt;/p&gt;,
              &lt;p&gt;Paragraph 2&lt;/p&gt;]
            </code>
          </li>
          <li>
            Finding HTML elements by class name:
            <code className="language-javascript">
              var x = document.getElementsByClassName("intro");
            </code>
            <br />
            <code className="language-javascript">
              // Return: HTMLCollection [ &lt;div class="box"&gt;Box
              1&lt;/div&gt;, &lt;div class="box"&gt;Box 2&lt;/div&gt; ]
            </code>
          </li>
          <li>
            Finding HTML elements by CSS selectors:
            <code className="language-javascript">
              var x = document.querySelectorAll("p.intro");
            </code>
            <br />
            <code className="language-javascript">
              {""}
              // Return: NodeList [ &lt;p class="intro"&gt;Box 1&lt;/p&gt;,
              &lt;p class="intro"&gt;Box 2&lt;/p&gt;]
            </code>
          </li>
          <li>
            <p style={{ marginLeft: 0 }}>
              Finding HTML elements by: HTML object collections are properties
              on the document object that give quick access to commonly used
              elements. Here are a few examples:
              <ul>
                <li>
                  <b>document.forms</b> returns an HTMLCollection of all
                  &lt;form&gt; elements.
                </li>
                <li>
                  <b>document.images</b> returns an HTMLCollection of all
                  &lt;img&gt; elements.
                </li>
                <li>
                  <b>document.links</b> returns an HTMLCollection of all
                  &lt;a&gt; elements with href attributes.
                </li>
                <li>
                  <b>document.scripts</b> returns an HTMLCollection of
                  all&lt;script&gt; elements.
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </p>

      {/* ------------------------------------------------------ */}

      <h1>References</h1>
      <ul>
        <li>
          <a href="https://roadmap.sh/questions/frontend">
            Top 30 Popular Front End Developer Interview Questions
          </a>
        </li>
        <li>
          <a href="https://www.semrush.com/blog/html-tags-for-seo/">
            12 SEO HTML Tags You Need to Know
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp">
            What is the HTML DOM?
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FeInterview;
