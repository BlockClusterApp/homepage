import React from 'react';

/* eslint-disable react/no-danger */
export default function FaqsList() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
  <html>
  <head>
    <title>Blockcluster FAQ</title>
    <style type="text/css">
      .container_boot {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      @media (min-width: 768px) {
        .container_boot {
          width: 750px;
        }
      }
      @media (min-width: 992px) {
        .container_boot {
          width: 970px;
        }
      }

      .accordion {
        background-color: #fff;
        color: rgb(2, 95, 170);
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        font-weight: 400;
        text-align: left;
        outline: none;
        font-size: 17px;
       transition: 0.4s;
        border-bottom: dotted 1px #eee;
        padding-top: 24px;
      }

      .active, .accordion:hover {
        background-color: #f2fbff;
      }

      .accordion:after {
        content: '+';
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
      }

      .active:after {
        content: "-";
      }

      .panel {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        line-height: 1.6em;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
      .koko_kinie li{
        padding: 10px;
      }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
  </head>
  <body style="font-family: 'Source Sans Pro', sans-serif;">
    <div class="container_boot">

      <h2 id="gettingStarted">FAQs</h2>
      <div style="padding-top: 30px;"></div>

      <button class="accordion">What is BlockCluster?</button>
      <div class="panel">
        <p>BlockCluster is an enterprise cloud platform that allows developers to build, manage and scale their dapps using any blockchain protocol of choice with multiple  deployment options ( on-premises, cloud or hybrid ). Developers can create use case flows wherein they can control node management , smart contracts, transaction privacy, role permissions, asset distribution and web services through a simple user interface saving months of time and effort required for scratch development.
      </p>
      </div>

      <button class="accordion">What are we doing?</button>
      <div class="panel">
        <p>We are making enterprise blockchain sexier.
      </p>
      </div>

      <button class="accordion">What all protocols BlockCluster supports?</button>
      <div class="panel">
        <p>At present, we support 3 protocols:</p>
        <ul class="koko_kinie">
          <li>Quorum</li>
          <li>Dynamo (a modified version of Quorum)</li>
          <li>Hyperledger</li>
        </ul>
        <p>We are in the process of developing support for Corda and Multi-chain as well.</p>
      </div>

      <button class="accordion">Why do I need BlockCluster? Who can benefit from it?</button>
      <div class="panel">
        <p>You can use BlockCluster and benefit from it if you are:</p>
        <ul class="koko_kinie">
        <li>A start-up/SME/large enterprise looking to transform a business idea using DLTs.</li>
        <li>Exploring blockchain for a possible enablement to a business bottleneck and want to do a quick Proof of Concept (POC) before investing in full-scale development.</li>
        <li>Looking to scale a successful POC to production</li>
        </ul>
      </div>



      <button class="accordion">What kind of deployment BlockCluster supports?</button>
      <div class="panel">
        <p>BlockCluster supports 3 kinds of deployment:</p>
        <ul>
          <li>BlockCluster Cloud: All the nodes are deployed on our cloud platform and can be accessed via the web interface on the subscription-based model. </li>
          <li>On-Premises: All the nodes are deployed in your data center with the enterprise version license of BlockCluster.</li>
          <li>Your Cloud Platform: All the nodes are deployed in your cloud platform with the enterprise version license of BlockCluster.</li>
        </ul>
        <p>BlockCluster also supports Hybrid deployment in which few of the nodes are deployed in your data center, while some of them are deployed on BlockCluster cloud.</p>
      </div>

      <button class="accordion">What is BlockCluster compatibility with my existing software products/tools?</button>
      <div class="panel">
        <p>BlockCluster offers out-of-the-box compatibility with all the tools that communicate with REST API. However, if your existing software products/tools use SOAP or XML based communication, you can still connect them with BlockCluster using add-on connectors available on request.</p>
      </div>

      <button class="accordion">I want to do a PoC first to test out my idea, without investing too much in development. Can BlockCluster help me?  </button>
      <div class="panel">
        <p>BlockCluster cloud version offers two types of nodes: A light node and a Power node. Light nodes are specifically designed to carry out all kinds of experiments to test the feasibility of use cases by developing PoC. They require investment as low as USD 99 per month for each node. You can easily perform PoC by buying a minimum number of nodes required to successfully test your concept, minimizing your investment. After successful POC, you can switch to either Power nodes or buy enterprise license of BlockCluster for developing a production version of your solution.</p>
      </div>

      <button class="accordion">There are open source tools and solutions available on the market? What makes BlockCluster a better choice for developing DApps? </button>
      <div class="panel">
        <p>There are some open source tools available in the market. However developing a solution using one of them poses a few issues:-</p>
        <ul class="koko_kinie">
          <li>You need different tools and solution to build one comprehensive solution. In order to accomplish that, you need to hire different Blockchain resources who can understand and integrate these tools into a single solution which usually costs a lot more in terms of money and time.</li>
        <li>The support provided for these open source tools varies. Hence, you would also require resources who could manage these open source tools which again requires investing in hiring the right resources.</li>
        </ul>
      </div>


      <button class="accordion">I want to do a PoC first to test out my idea, without investing too much in development. Can BlockCluster help me?  </button>
      <div class="panel">
        <p>BlockCluster cloud version offers two types of nodes: A light node and a Power node. Light nodes are specifically designed to carry out all kinds of experiments to test the feasibility of use cases by developing PoC. They require investment as low as USD 99 per month for each node. You can easily perform PoC by buying a minimum number of nodes required to successfully test your concept, minimizing your investment. After successful POC, you can switch to either Power nodes or buy enterprise license of BlockCluster for developing a production version of your solution.</p>
      </div>


      <button class="accordion">I want to use this product to create solutions as a reseller, how can I partner up? </button>
      <div class="panel">
        <p>We have a partnership program wherein you can become a platform reseller. To know more about our partnership programs, you can <a href="/partners">click here</a>. Fill out the form and somebody from our team will get in touch with you very soon.</p>
      </div>

      <button class="accordion">How BlockCluster helps me achieve maximum service coverage in my enterprise Blockchain development? </button>
      <div class="panel">
        <p>BlockCluster provides you with end-to-end service coverage. It helps you manage the whole life cycle of your enterprise Blockchain development, right from initial steps of selecting the right protocol, spinning the nodes, etc. up till the finishing steps of figuring how to work with smart contracts and other services. In summary, BlockCluster covers these 4 layers of services: Infrastructure, smart contracts, application and web services.</p>
      </div>

      <button class="accordion">What are the different add-ons that BlockCluster Offers? </button>
      <div class="panel">
        <p>At BlockCluster, we feel that Blockchain alone is not enough to create the perfect DApp for your business. We offer other important tools as add-ons as a part of BlockCluster, such as file storage, payment gateway etc. Here is a list of current add-ons:</p>
        <ul class="koko_kinie">
          <li>Hyperion – File storage: Hyperion is IPFS Cluster-as-a-Service. It scales on-demand according to your storage requirements. You can choose to upload files to a specific geographic location to adhere to regulatory compliances.</li>
        <li>Paymeter – For Creating Wallets: It provides APIs for integrating ETH and ERC20 tokens in your DApp. Features include instant internal transactions settlement, supports any ERC20 token support, gas tank for easing ERC20 transfer.</li>
        </ul>
      </div>

      <button class="accordion">How do I get billed for using BlockCluster platform?</button>
      <div class="panel">
        <p>You can avail BlockCluster's on-demand cloud computing capabilities on monthly subscription billing or go for an yearly enterprise license. For the cloud you can choose:</p>
        <li>The light node, suitable for development, testing, and experimenting, costs USD 99/month, which is equivalent to USD 0.137/hour.</li>
        <li>The Power node, recommended for production-grade solutions, cost USD 299/month, which is equivalent to USD 0.415/hour. </li>
         <p>For more details, you can visit <a href="/pricing">this</a> link.</p>
      </div>

      <button class="accordion">I don't have expertise in Blockchain. How can BlockCluster help me in brainstorming and visualizing my use-case?  </button>
      <div class="panel">
        <p>The current BlockCluster team is divided into 3 different departments:</p>
        <ul>
          <li>PSO (Professional services organization) – They take care of all the pre-sale and consulting related tasks. </li>
          <li>R&D – They are responsible for the core product, protocols, and the add-ons.</li>
          <li>Support – Provide support to the existing users of the platform and take care of tickets raised by them.</li>
        </ul>
        <p>	To get help on brainstorming your use-case or determining the right flow of your DApp, you can reach out to the PSO team via the support section or contact us form. This service is charged separately on a case-to-case basis.
        </p>
      </div>

      <button class="accordion">What kind of support do I get for BlockCluster Products?  </button>
      <div class="panel">
        <p>For both cloud and enterprise versions, there are two types of support services available:</p>
        <ul>
          <li><b>Standard support </b>– You can raise a ticket from the support section available in the dashboard after logging into BlockCluster. The raised concerns get resolved by the engineers in the support team and the turn-around time for the tickets to get resolved is up to 3 days.</li>
          <li><b>Premium support </b> You get a dedicated support assistant to work along with your team from the support department. For the pricing of the premium support, you can reach out to us via the contact us form.</li>
        </ul>
      </div>

      <button class="accordion">Can BlockCluster team also assist me with my DApp maintenance?</button>
      <div class="panel">
        <p>Yes, the BlockCluster support team will help you with your DApp maintenance. <br/><br/>
        In terms of Blockchain ecosystem, the maintenance support comes bundled with the license (both cloud and enterprise) and is valid till the expiry of your license. <br/>
        In terms of DApp application maintenance, the support for the blockchain nodes is a part of the license. However, if you need us to support the maintenance of your application, then a seperate support contract can be drafted.</p>
      </div>

      <button class="accordion">I am a part of a startup/SME who wants to build a Blockchain Solution. How can BlockCluster help me manage the product's lifecycle? </button>
      <div class="panel">
        <p>For a startup/SME, cost and time-to-market are crucial factors. BlockCluster helps in low-cost development and integration of your Blockchain solution quickly, so you can disrupt the target industry by reaching the market early. You also have the access to on-demand scalability, which you can buy on-the-go to match increasing demand of your business, thus helping you save the initial investment and experiment with your idea.</p>
      </div>

      <button class="accordion">I am a developer who wants to build a Blockchain Solution. How can BlockCluster help me manage the product's lifecycle?  </button>
      <div class="panel">
        <p>BlockCluster can help you develop a highly scalable solution with minimal coding, so you can focus on other important aspects of the development process. You can perform quick iterations and launch the product sooner with quick deployment capabilities at a low cost.</p>
      </div>
      <button class="accordion">Where can I find the Github code or activity for the project?</button>
      <div class="panel">
        <p>The BlockCluster code developed by us is confidential and is our intellectual property. We are doing the deployment for multiple enterprises and have signed multiple NDAs, which restrict us in making the code public. However, there are certain proxy contract templates which are publicly available from which you can learn coding and deploying smart contracts on BlockCluster. You can get an idea of the activity for the project such as the number of commits from this Github link. (need to hyperlink the URL) </p>
      </div>
    </div>
    <div style="padding-top: 30px;"></div>

    <script type="text/javascript">
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight){
            panel.style.paddingTop = null;
            panel.style.maxHeight = null;
          } else {
            console.log((panel.scrollHeight + 30), (panel.scrollHeight + 30) + "px")
            panel.style.paddingTop = 30 + "px";
            panel.style.maxHeight = (panel.scrollHeight + 30) + "px";
          }
        });
      }
    </script>

  </body>
  </html>`,
      }}
    />
  );
}
