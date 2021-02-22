---
"title": "Blockchain-based Sensor Data Validation"
"date": "2021-02-22"
"author": "Christian Kozalla"
"shortTitle": "This article provides an introduction to the merger of Blockchain technology with IoT networks to enhance privacy and security for the user."
"description": "The Blockchain has constantly been hyped and is still gaining popularity - not only for cryptocurrencies such as Bitcoin pushing forward into our daily lives. Blockchain technology promises privacy and security, thus enabling a free internet of independent users. And with the rise of IoT devices, data generation, processing and storage is growing out of hand. This article provides an introduction to the merger of Blockchain technology with IoT networks to enhance privacy and security for the user."
"imageUrl": ""
"tags": ["Blockchain", "IoT"]
"isInDb": true
---

# Blockchain-based Sensor Data Validation

<section>
  <h2>1. Introduction to Blockchain Technology and Sensor Data</h2>
  <p>
    This paper provides and overview of two technological fields: IoT
    networks and Blockchain technology. These two fields are not necessarily
    interconnected, but if combined they can bring certain advantages to
    their respective field of application.<br />
    First, these two fields of interesed will be outlined separately in 1.1
    and 1.2, whereas section 2. and 3. describe experimental setups to
    investigate possible solutions for merging Blockchain technology with
    IoT networks.
  </p>
  <p>
    An overview of the Blockchain technology and its inherent mechanisms is
    given, which can be used to validate data in different systems relying
    on the exchange and processing of data. A collection of such systems is
    listed here in order to point out which applications are suited for
    having its data validated on the Blockchain. <br />
    There are certain areas for which Blockchain technology is discussed to
    be used for data validation.
  </p>
  <ol>
    <li>Smart cities</li>
    <li>Supply chain for industrial manufacturing</li>
    <li>Electricity grids</li>
    <li>Banking, financial transactions</li>
    <li>Health care</li>
    <li>Science</li>
  </ol>
  <p>
    Essentially, in all these areas a network of smart devices is formed,
    which is usually referred to as <em>the internet of things (IoT)</em>.
    Basically, if security and sensitivity of exchanged data is an issue in
    a certain application network, it is appropriate to consider
    implementing Blockchain validation mechanisms for sensor data.
  </p>
  <h3>1.1 Basics of Blockchain Technology</h3>
  <p>
    The Blockchain can be described as an
    <em>append-only database</em> distributed among all members in a
    network. Due to several built-in mechanisms in the Blockchain's design,
    it allows the establishment of a network of non-trusting members unknown
    to each other, but still being able to interact directly. These inherent
    mechanisms are:
  </p>
  <ul>
    <li>
      <strong>Hashes</strong>: A hash is derived from a hash function which
      maps out an input to a random bit string.
    </li>
    <li>
      <strong>Private key encryption</strong>: Every member of a network is
      supplied with a public and a private key. The public key is like a
      bank account number or telephone number, publicly addressable. But a
      member's private key is kept secret by the member and will be used for
      encryption of transactions signed by him.
    </li>
    <li>
      <strong>Signed transactions</strong>: Every time a member emits a
      transaction on the Blockchain, the transaction will be signed by that
      member's private key ensuring that truly he/she has emitted that
      transaction. Additionally, a member who received a transaction from
      another member can verify that the sender of that transaction was
      truly the other member using the other member's public key.
    </li>
    <li>
      <strong>Consensus algorithm</strong>: An algorithm that dictates how
      new data (i.e. a new block) should be appended to the existing chain.
      Widely used algorithms are <em>Proof of Work</em> and
      <em>Proof of Stake</em>. When consensus is reached by a majority of
      members in the network the new block is appended to the chain.
    </li>
    <li>
      <strong>Mining</strong>: Spending computational effort in order to
      <em>solve the puzzle</em> to find a new hash for appending a new block
      to the chain. The successful miner, who found a suitable hash, will be
      rewarded with an amount of the Blockchains cryptocurrency (e.g.
      Bitcoin, Ether). Mining is most common in Blockchains using the Proof
      of Work consensus algorithm, where appending a new block requires high
      computational power.
    </li>
    <li>
      <strong>Smart contracts</strong>: A smart contract is a computerized
      transaction protocol that executes the terms of a contract. Some Blockchains (e.g. Ethereum) allow to
      deploy smart contracts to the chain. The smart contract needs to be
      developed in a suitable programming language, tested and deployed.
      After it is deployed, it's code cannot be altered anymore (which is an
      inherent mechanism of the Blockchain technology). For Ethereum the
      most widely used language for developing smart contracts is
      <em>Solidity</em>.
    </li>
  </ul>
  <h3>1.2 Basics of Sensor Data in Networks</h3>
  <p>
    Data from sensors is widely generated and processed in all kinds of
    networks. Through sensor data from smart devices, the physical world can
    be digitized and streamed with other data. A vivid example can be
    autonomous driving, where sensor data are collected and processed in
    real-time to feedback to control the movement of the vehicle. In
    general, those networks can be referred to as IoT networks (Internet of
    Things).
  </p>
  <p>
    Such an IoT network is made of different layers (from top to bottom):
  </p>
  <ul>
    <li>
      <em>Application:</em> The purpose and real-world actions are carried
      out on this top-level layer. Applications can be the internet of
      vehicles, smart grids, supply chain, smart manufacturing, health care.
    </li>
    <li>
      <em>Platform:</em> On this layer the application or service is hosted.
      It may include a cloud service, an operating system or a user
      interface.
    </li>
    <li>
      <em>Communication:</em> This layer includes the network protocols e.g.
      Bluetooth, Near Field Communication, Low-power Wireless Personal Area
      Networks, Ethernet, etc, to ensure communication between smart devices
      e.g. sensors, RFIDs, controllers, etc, with IoT gateways or WiFi
      Access Points.
    </li>
    <li>
      <em>Perception:</em> On this bottom layer, the smart devices
      (mentioned above) collect their data from the physical world.
    </li>
  </ul>
  <p>
    An overview of the proposed layers of an IoT network is shown in Fig. 1.
    Most interesting are the security requirements denoted next to each
    layer the network consists of. At the bottom, the device or perception
    layer, <em>sensor data integrity</em> is most critical security issue.
    It means, that the generation of accurate data in the correct format,
    subsequently preprocessing and passing data on to the network layer, is
    the important part on the <em>device layer</em>. <br />
    On the <em>network layer</em> the most critical issue is
    <em>authentication</em>. Only trusted devices should be able to gain
    access to the network and read and write data, here. <br />
    On the <em>platform layer</em> all the data from the previous layers are
    joined together. The cloud platform is able to perform a vast number of
    tasks on the data collection. Here are some examples: a) combining data
    with other data b) machine learning & artificial intelligence c) process
    data to provide consumable services for the layer above.
    <em>Privacy-preserving</em> is the most critical issue on the platform
    layer, because the collected data sets might contain sensitive or
    personal data of the user of the device, he/she did not intend to
    disclose. Additionally, if large data sets contain a noteworthy amount
    of anonymized personal data, it is still possible to misuse the data.
    <br />
    On the <em>service layer</em> the designed application is served to the
    end-consumer of the designated industry, e.g. healthcare, smart home,
    smart manufacturing, supply chain, financial services, safety.
  </p>
  <p align="center">
    <img
      src="/images/blockchain-based-sensor-data-validation/iot-overview-future-of-iot.png"
      alt="Overview of IoT architecture"
      width="100%"
    />
    <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">
      <strong>Fig. 1</strong>: Overview of IoT architecture - <a href="https://www.mdpi.com/2076-3417/7/10/1072" target="_blank" rel="noopener">S. Lee et al.</a>
    </figcaption>
  </p>
  <p>
    Fig. 2 provides visual examples of IoT network components on the
    perception layer, communication layer and application layer.
  </p>
  <p align="center">
    <img
      src="/images/blockchain-based-sensor-data-validation/iot-layers-example-blockchain-for-the-internet-of-things.png"
      alt="Specific example of an IoT network architecture"
      width="100%"
    />
    <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">
      <strong>Fig. 2</strong>: Specific example of an IoT network
      architecture - <a href="https://dev.arxiv.org/abs/1906.00245v5" target="_blank" rel="noopener">H. Dai et al.</a>
    </figcaption>
  </p>
  <h4>1.2.1 Data security in IoT networks</h4>
  <blockquote style="border-left: solid 5px gray; padding-left: 1.5rem">
    "Data security is one of the important issues in the security area. The
    confidentiality of the IoT data may not be regarded significantly
    because many IoT data can contain simple data such as temperature,
    humidity, and others. However, some of the data such as credit data or
    request data to control IoT devices may indirectly contain the user’s
    private information and affect the user’s daily patterns. For instance,
    when these data are forged or falsified, a malicious attacker can easily
    control the user’s IoT devices." <br />
    <em
      >Suk Kyu Lee, Future of IoT Networks: A Survey, Applied Sciences,
      2017</em
    >
  </blockquote>
  <p>
    This blockquote vividly illustrates the severity of privacy and security
    in IoT networks. Critical points on some IoT layers are addressed:
  </p>
  <ul>
    <li>
      <em>At the device layer:</em> The collected data via sensors might be
      trivial, but with each request a considerable amount of metadata could
      be transferred.
    </li>
    <li>
      <em>At the network layer:</em> If authentication is an issue, a
      malicious user could break into the network and obtain data from both
      layers above and below and/or control IoT devices unauthorized.
    </li>
  </ul>
  <p>
    A solution proposed by <em>Suk Kyu Lee et al.</em> is to use
    light weight encryption and key management protocol on the device layer. For IoT devices typically are only equipped with
    low computational power, a light weight encryption algorithm could serve
    tremendous benefit to user's privacy and security.
    IoT devices mostly use RFID and the Electronic Product Code (EPC) to
    authenticate with different RFID readers across the network. Either
    basic RFID or EPC tags provide
    <em>"no explicit anti-counterfeiting features whatsoever"</em>. The proposed light weight cryptography protocol
    is based on XOR operations by <em>Lee and Lin</em>, by which
    generated passwords can then be used for mutual authentication of
    devices and IoT gateways.
  </p>
  <h3>1.3 How Blockchain Technology can benefit Networks</h3>
  <p>
    One major field of application for Blockchain technology is to make a
    <em>centralized organization</em> obsolete in a network that relies on
    transactions between its members. Fig. 3 illustrates the difference
    between centralized and decentralized IoT networks for different
    use-cases.
  </p>
  <p align="center">
    <img
      src="/images/blockchain-based-sensor-data-validation/Centralized-IoT-where-a-central-authority-manages-and-controls-all-operations-of-the.jpg"
      alt="Difference between centralized and decentralized IoT networks"
      width="100%"
    />
    <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">
      <strong>Fig. 3</strong>: Difference between centralized and
      decentralized IoT networks - <a href="https://doi.org/10.1016/bs.adcom.2018.12.001" target="_blank" rel="noopener">H. F. Atlam</a>
    </figcaption>
  </p>
  <p>
    Here is an example use-case outlined for financial transactions: Imagine
    a network of private bank accounts. Every account is a node in the
    banking network and corresponds to a single person. If someone wanted to
    transfer money to another person's account, a
    <em>centralized organization</em>, i.e. the bank, is necessary to
    process and verify the transaction. In general, implementing such
    networks, where unknown and non-trusting members should be able to
    directly interact with each other via transactions, powered by the
    Blockchain to store data and process transactions, is not dependent on a
    third-party centralized organization. Thus, Blockchain technology
    enables centralized networks to transform into
    <em>decentralized networks</em> keeping or even enhance privacy and
    security of processed data due to its inherent mechanisms.
  </p>
  <p>
    In Fig. 4, it is illustrated how the transfer of money in a
    decentralized network could be managed directly by using Blockchain's
    public and private key encryption for signing transactions. In this
    case, the sender and the receiver are unknown to each other. They are
    non-trusting members of a decentralized network. But, although there is
    no central authority (i.e. the bank) for validating transactional data -
    like matching and validating sender/receiver name, account number, etc -
    these two parties can still conduct a secure transaction through public
    and private key encryption.
  </p>
  <ol>
    <li>The sender signs the transaction with his private key.</li>
    <li>
      The sender uses the receivers public key to direct the transaction at
      the receivers account (like the public address of the account).
    </li>
    <li>Due to 1. and 2. the transaction is encrypted.</li>
    <li>
      The receiver can verify who sent the money by using the senders public
      key.
    </li>
    <li>
      The receiver needs to decrypt the transaction using his private key.
    </li>
  </ol>
  <p align="center">
    <img
      src="/images/blockchain-based-sensor-data-validation/Example_Message_signed.png"
      alt="Example - Money transfer in decentralized network using public and private key encryption"
      width="100%"
    />
    <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">
      <strong>Fig. 4</strong>: Example - Money transfer in decentralized
      network using public and private key encryption.
    </figcaption>
  </p>
</section>
<section>
  <h2>2. Example Setup to Validate Data on the Blockchain</h2>
  <p>
    In order to profit from the benefits the Blockchain technology can
    provide, IoT networks need to be augmented by an additional layer, in
    which communication is piped through the Blockchain. This augmentation
    requires additional hardware and software in IoT devices / networks.
  </p>
  <p>
    Here, it is outlined what an experimental setup for both hardware and
    software may look like in order to investigate the storage of sensor
    data on the Ethereum Blockchain using a smart contract. The hardware part, shown in Fig. 5, consists of
    sensors that collect the data from the environment, e.g. humidity
    sensors. Additionally, the acquired data needs to be processed and
    stored on the Blockchain, which can be done on a Raspberry Pi. It
    connects to the Blockchain as a node on which the developed smart
    contract is deployed that processes transactions on the Blockchain
    networks, i.e. validating and storing the sensor data. Basically, the
    Raspberry Pi runs an application to collect data, pre-process it and
    conduct transactions on the Blockchain network. It should be noted here,
    that a Raspberry Pi is equipped with way more computing power than the
    average IoT device.
  </p>
  <p align="center">
    <img
      src="/images/blockchain-based-sensor-data-validation/hardware-for-blockchain-testbed.png"
      alt="Raspberry PI to connect IoT sensor and Ethereum Blockchain"
      width="100%"
    />
    <figcaption style="padding-top: 0; padding-left: 2rem; font-style: italic">
      <strong>Fig. 5</strong>: Raspberry Pi to connect IoT sensor and
      Ethereum Blockchain - <a href="https://doi.org/10.3390/electronics9020244" target="_blank" rel="noopener">Kurt Peker Y</a>
    </figcaption>
  </p>
  <p>
    The software part for the experiment consists of several tools to serve
    different purposes:
  </p>
  <ul>
    <li>
      <strong>MetaMask:</strong> Is a browser extension used as a connection
      between a node's wallet and the smart contract. Processing
      transactions on the Blockchain is paid for with the Blockchains
      cryptocurrency, e.g. Ether on Ethereum. With MetaMask a user can
      connect his smart contract with his crypto-wallet in order to fund his
      transactions.
    </li>
    <li>
      <strong>Infura:</strong> It provide a set of tools in order to connect
      an application to a Blockchain instance of Ethereum. For testing
      purposes, there are several Ethereum testnets, i.e. Ropsten, Rinkeby,
      Kovan and Görli. Basically, Infura runs our experimental Blockchain
      node and exposes an API to connect to our node over HTTPS.
    </li>
    <li>
      <strong>Remix IDE:</strong> Remix is a development dependency used to
      develop the smart contract in Solidity language. With Remix IDE you
      can write, test and deploy your own smart contracts for Ethereum right
      in the browser.
    </li>
    <li>
      <strong>A Python script: </strong> The Raspberry Pi runs a Python
      script to:
      <ol>
        <li>Read the data from the sensor</li>
        <li>Passing data to smart contract to create a transaction</li>
        <li>Sign the transaction</li>
        <li>Send and process the transaction</li>
        <li>Log transaction receipt</li>
      </ol>
    </li>
  </ul>
</section>

<section>
  <h2>3. Evaluation of Sensor Data Validation on the Blockchain</h2>
  <p>
    In general, Blockchain technology is used with IoT networks to achieve
    privacy and security while allowing a decentralized network
    architecture, in which members directly interact with each other. Blockchain technology is appropriate for ensuring
    security and privacy on IoT networks, but it may not be suitable in each
    IoT use-case or application. The union of IoT and Blockchain faces
    certain challenges to be investigated further in order to mitigate
    operational drawbacks, which Blockchain technology bring to IoT networks.
  </p>
  <ul>
    <li>
      <strong>Limited capabilities:</strong> IoT devices of low
      computational capability may be unsuited for interacting over a
      Blockchain network.
    </li>
    <li>
      <strong>Operational costs:</strong> Every computation such as
      processing and storing data has a certain cost on the Blockchain.
      Using the Blockchain as a simple, but immutable database may increase
      operational costs beyond economic reasonability.
    </li>
    <li>
      <strong>Micropayments:</strong> The integration of micropayment
      services may be required on the device layer.
    </li>
  </ul>
  <p>
    Thus, there are certain impediments that hinder the integration of
    Blockchain with IoT networks. A primary challenge in the whole industry
    is the development of an IoT-centric consensus protocol to be tailored
    to the requirements of existing IoT networks.
    Existing consensus protocols such as PoW or PoS rely either on
    extraordinary computational power for appending a block of data or a
    certain amount of stake, i.e. cryptocurrency, in the network. One
    emerging Blockchain platform designed to serve the purposes of IoT
    networks could be <a href="https://www.iota.org/" rel="noopener" target="_blank" aria-description="IOTA Blockchain IoT Service">IOTA</a>. It relies on the
    distributed-ledger technology which Blockchain uses to enable secure
    transfer of data in IoT networks. A similar solution is offered by IBM
    and the Linux Foundation called <a href="https://www.hyperledger.org/use/fabric" rel="noopener" target="_blank" aria-label="Hyperledger Fabric Blockchain Service">Hyperledger Fabric</a>,
    which is a Blockchain distributed-ledger technology enabling the
    development of distributed apps (dApps). Even AWS provides a managed
    blockchain service and a Quantum Ledger Database
    as a cloud service.
  </p>
  <p>
    <em>Supplement about Quantum Resilience:</em><br />Quantum Resilience
    denotes the resistance of Blockchain technology and its foundational
    cryptographic concepts against the rise of quantum computing. Blockchain technology was initially founded on
    two cryptographic principles: hashes and public key encryption. Hashes used in most Blockchains are based on
    the SHA-256 algorithm, with 2<sup>128</sup> operations required to be
    cracked. Thus, hashes are pretty resilient against quantum computing.
    However, public key encryption, based on elliptic-curve digital
    signature algorithm (ECDSA) could be broken if quantum computing
    advances only a little further in computing power. Thus, rendering all
    Blockchains based on the cryptographic principles insecure. This looming
    scenario pushes researchers worldwide to develop a quantum-safe
    Blockchain platform.
  </p>
</section>
<section>
  <h2>4. Conclusion</h2>
  <p>
    Blockchain technology is among the foundations for the next economic
    revolution, its area of applications are huge
    and spreads almost across all economic sectors. While Blockchain
    technology brings certain benefits to applications such as security,
    privacy and protection against data-loss or data-manipulation by
    malicious users or attackers from the outside, there are drawbacks as
    well, concerning transactional costs and technological capability of
    devices. When merging Blockchain technology to a certain application, a
    thorough assessment is recommended whether the integration of Blockchain
    is reasonable compared to its drawbacks in this use-case. Researchers
    provide frameworks for decision-makers in order to facilitate Blockchain
    adoption and preliminary considerations about desired benefits and
    possible outcomes.
  </p>
</section>

##
