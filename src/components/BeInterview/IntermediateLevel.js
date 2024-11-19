const IntermediateLevel = () => {
  return (
    <>
      <h2 id="17">
        17. Describe how you would implement a full-text search in a database
      </h2>
      <p>
        You can use the native full-text search functionality of a database,
        such as MySQL, Postgre or even ElasticSearch.
      </p>
      <p>
        However, if you want to implement it yourself, the steps would be:
        <ul>
          <li>
            Preprocessing the text data to be searched and normalizing it by
            applying tokenization, stemming and removing stop words.
          </li>
          <li>
            Then, implement an inverted index, somehow relating each unique word
            to the records that contain that word.
          </li>
          <li>
            Create a search UI and normalize the input from the user in the same
            way the text data was normalized.
          </li>
          <li>Then, search for each word in the database.</li>
          <li>
            Sort the results by implementing a scoring logic based on different
            aspects, such as word frequency.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="18">
        18. How would you approach batch processing in a data-heavy backend
        application?
      </h2>
      <p>
        The best option here would be to use a batch-processing framework such
        as Hadoop or Spark. They are already prepared to process massive amounts
        of data in parallel.
      </p>
      <p>
        Note: Batch processing refers to a method of processing large volumes of
        data or tasks in predefined sets, called batches, rather than processing
        them individually or in real-time. In batch processing, data is
        accumulated or collected over a period of time, and then processed as a
        group. This approach allows for efficient and automated processing of
        repetitive tasks, such as billing, generating reports, or updating
        database records.{" "}
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="19">
        19. Can you explain the use and benefits of a message queue in a
        distributed system?
      </h2>
      <p>
        A message queue in a distributed system can act as the core component of
        a reactive architecture. Each service can trigger and listen for events
        coming from the queue. That way, when the events arrive, those services
        can react to them without having to actively poll other services for a
        response.
      </p>
      <img
        src="https://assets.roadmap.sh/guest/message-queue-yw7on.png"
        alt=""
      />
      <img
        src="https://toidicodedao.com/wp-content/uploads/2019/09/rabbitmq-beginners-updated.png"
        alt=""
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="20">
        20. What strategies would you use to manage database connections in a
        high-load scenario?
      </h2>
      <p>
        During a high-load scenario, there are several things a developer can do
        to improve the performance of the database connection:
        <ul>
          <li>
            Using connection pools to reuse connections reduces the time
            required to establish a new one.
          </li>
          <li>
            Load balancing the database traffic (the queries) between a group of
            databases would help distribute the load.
          </li>
          <li>
            Even optimizing your queries can reduce the time you're using each
            connection, helping you optimize the use of resources and minimizing
            the time you're spending with each active connection.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="21">
        21. How would you set up a continuous integration/continuous deployment
        (CI/CD) pipeline for backend services?
      </h2>
      <p>
        There are multiple considerations to have while setting up Continuous
        Integration and Continuous Delivery pipelines:
        <ul>
          <li>
            <b>Using source control</b> as the trigger for the entire process
            (git for example). The build pipelines for your backend services
            should get executed when you push your code into a specific branch.
          </li>
          <li>
            <b>Pick the right CI/CD</b> platform for your needs, there are many
            out there such as GitHub Actions, GitLab CI/CD, CircleCI and more.
          </li>
          <li>
            Make sure you have <b>automated unit tests</b> that can be executed
            inside these pipelines.
          </li>
          <li>
            <b>Automatic deployment</b> should happen only if all tests are
            executed successfully, otherwise, the pipeline should fail,
            preventing broken code from reaching any environment.
          </li>
          <li>
            <b>Use an artifact repository</b> such as JFrog Artifactory or Nexus
            Repository to store successfully built services.
          </li>
          <li>
            Finally, consider setting up a <b>rollback strategy</b> in case
            something goes wrong and the final deployed version of your service
            is corrupted somehow.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="22">
        22. Can you describe a distributed caching strategy for a
        high-availability application?
      </h2>
      <p>
        In this scenario, you have to consider the following points:
        <ul>
          <li>
            Implement a cluster of servers that will all act as the distributed
            cache. Implement a data sharding process to evenly distribute the
            data amongst all cache servers and make sure it uses a consistent
            hashing algorithm to minimize cache reorganization when a server
            joins or leaves the cluster.
          </li>
          <li>
            Add cache replication to have redundancy of your data in case of a
            failure, that way, your distributed cache is fault-tolerant as well.
          </li>
          <li>
            Cache invalidation is a must on any caching solution, as your data
            will become stale if you don't update it often.
          </li>
        </ul>
      </p>
      <img
        alt=""
        src="https://miro.medium.com/v2/resize:fit:1400/1*vk3QmP_zG13D6JwqM9ZNMw.png"
      />

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="23">
        23. What methods can you use for managing background tasks in your
        applications?
      </h2>
      <p>
        There are many reasons to need a background job processing mechanism in
        your application which is often because the job takes longer than that
        we can handle it in the context of a http request-response
        communication.
        <br />
        <br />
        For example, generating a report and publishing the results that takes a
        lot of time which makes it nearly impossible to use http
        request-response to do the job or running a batch processing job every
        time a certain file is uploaded to Dropbox again is an example of where
        using background job processing comes handy.
      </p>
      <p>
        It highly depends on your tech stack and what those background tasks are
        doing. And because of that, there are many options:
        <ul>
          <li>
            Using task queues such as RabbitMQ or Amazon SQS. These will let you
            have workers in the background as secondary processes while your
            application continues working.
          </li>
          <li>
            There are background job frameworks such as Celery for Python or
            Sidekiq for Ruby.
          </li>
          <li>You can also just rely on cron jobs if you want.</li>
          <li>
            If your programming language permits it, you can also use threads or
            workers to run these tasks in the background but within the same
            application.
          </li>
        </ul>
      </p>
      <blockquote>
        Quick example with bull in Node.js{" "}
        <a href="https://dev.to/mohsenkamrani/nodejs-background-job-processing-with-bull-basics-4633">
          here
        </a>
      </blockquote>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="24">
        24. How do you handle data encryption and decryption in a
        privacy-focused application?
      </h2>
      <p>
        For this type of application, you have to distinguish between{" "}
        <mark>"data at rest" and "data in transit".</mark> The first one
        describes your data while <mark>it's stored</mark> in your database (or
        any data storage you have). And the latter (data in transit) describes
        your data while <mark>it's traveling</mark> between backend services or
        even between the server and the client.
      </p>
      <p>
        For <b>"data in transit",</b> you should be ensuring that connection
        happens inside a secure and encrypted channel such as HTTPS.
      </p>
      <p>
        And for <b>"data at rest"</b> use strong encryption algorithms such as
        AES, RSA or ECC and make sure to keep their associated keys somewhere
        safe, such as inside a dedicated secrets management tool or key
        management services (KMS).
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="25">
        25. What are webhooks and how have you implemented them in past
        projects?
      </h2>
      <p>
        Webhooks are user-defined HTTP callbacks, they are triggered by a
        specific event inside a system. They're mainly used to notify about
        result of multi-step, asynchronous tasks to avoid keeping an open HTTP
        connection.
      </p>
      <p>
        As for the implementation of a webhook, consider the following:
        <ul>
          <li>
            <b>Event definition.</b> Make sure to define exactly what events
            will trigger the message to the webhook and the type of payload
            associated with those events.
          </li>
          <li>
            <b>Endpoint creation.</b> Based on the previous step, define an HTTP
            endpoint that can deal with the expected request (especially with
            the payload part). In other words, if you're receiving data in the
            webhook request, make sure to create the endpoint as a POST
            endpoint, otherwise you can use a GET one.
          </li>
          <li>
            <b>Security.</b> Remember to implement some form of security
            measures around your webhook endpoint so it can't be exploited.
          </li>
        </ul>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-2AIemn3oCU?si=XAc0WvwD03KTsOkl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen="true"
        ></iframe>
      </div>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="26">
        26. What considerations must be taken into account for GDPR compliance
        in a backend system?
      </h2>
      <p>
        The following are key considerations to be taken into account:
        <ul>
          <li>
            <b>
              Capture only what you need and what you told your users you'd
              capture.
            </b>{" "}
            Remember that to comply with GDPR (General Data Protection
            Regulation), you have to ask for your user's consent to collect
            their data, and you have to specify the actual data points you're
            collecting. So focus on those and nothing else.
          </li>
          <li>
            <b>Secure your data.</b> As part of the regulations, you have to
            make sure your data is secured both in transit and at rest. There
            are regular security audits that have to happen to ensure security
            is kept high.
          </li>
          <li>
            <b>The user has rights over the data you've captured,</b> so make
            sure you give them the right endpoints or services to read it, edit
            it or even remove it if they want.
          </li>
        </ul>
      </p>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

      <h2 id="27">
        27. Explain how you would deal with long-running processes in web
        requests
      </h2>
      <p>
        For web requests that trigger long-running processes, the best option is
        to implement a reactive architecture. This means that when a service
        receives a request, it will transform it into a message inside a message
        queue, and the long-running process will pick it up whenever it's ready
        to do so.
      </p>
      <p>
        In the meantime, the client sending this request receives an immediate
        response acknowledging that the request is being processed. The client
        itself can also be connected to the message queue (or through a proxy)
        and waiting for a "ready" event with its payload inside.
      </p>
      <img
        src="https://assets.roadmap.sh/guest/long-running-sn5fc.png"
        alt=""
      />
    </>
  );
};

export default IntermediateLevel;
