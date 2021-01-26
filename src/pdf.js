import React from "react";
import GisaidLogo from "./logo.png";
import {
  Link,
  Image,
  Page,
  Text,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const Pdf = ({
  name,
  email,
  street,
  state,
  zip,
  webName,
  url,
  webPurpose,
  date = new Date(),
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>DATA CONNECTIVITY APPLICATION</Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>Name:</Text> {name}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>Email:</Text> {email}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>Street Address: </Text>
        {street}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>State:</Text> {state}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>Zip:</Text> {zip}
      </Text>
      <Text style={styles.text}>
        Freunde von GISAID e.V., ("
        <Text style={{ fontFamily: "Times-Bold" }}>GISAID</Text>"), operates
        databases for the collection, aggregation, and sharing of genetic
        sequence data of viruses and related clinical and epidemiological data,
        including the GISAID EpiCoV™ Database (“{" "}
        <Text style={{ fontFamily: "Times-Bold" }}>EpiCoV™ Database</Text>”).
        The terms of access to and use of the GISAID Databases are governed by
        the GISAID Database Access Agreement (the "{" "}
        <Text style={{ fontFamily: "Times-Bold" }}>DAA</Text>"). Each natural
        person who has been granted permission to access and use the GISAID
        Database(s) has agreed to be bound by the DAA.
      </Text>
      <Text style={styles.text}>
        You, {name} ("<Text style={{ fontFamily: "Times-Bold" }}>You</Text>”)
        have agreed to be bound by the DAA, and are an Authorized User within
        the meaning of the DAA.{" "}
      </Text>
      <Text style={styles.text}>
        You are applying for permission to use certain data made available
        through the GISAID EpiCoV™ Database (“
        <Text style={{ fontFamily: "Times-Bold" }}>EpiCoV™ Data</Text>”) in
        connection with the publicly accessible web application described below
        (the “<Text style={{ fontFamily: "Times-Bold" }}>Web Application</Text>
        ”), notwithstanding clause 2(b) of the DAA.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>For: </Text>
        {webName}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>Located at: </Text> {url}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>For the purpose of: </Text>{" "}
        {webPurpose}
      </Text>
      <Text style={styles.text}>
        By signing this Application, You acknowledge that You have read and
        understand the terms of the Data Connectivity Agreement, below, and that
        You agree to those terms.
      </Text>
      <Text style={styles.text}>
        If this Application and Agreement is accepted and countersigned by
        GISAID, You will be provided and permitted to use certain EpiCoV™ Data
        in connection with the Web Application, notwithstanding clause 2(b) of
        the DAA. GISAID will determine the metadata fields it will provide based
        on Your description of the Web Application. To maintain the integrity of
        Data in GISAID, and to protect the interests of data contributors,
        GISAID does not permit duplication of its databases, and will not
        provide all metadata fields.
      </Text>
      <Text style={styles.text}>
        GISAID’s provision of the Data Package will be subject to the terms of
        the Data Connectivity Agreement, below:
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          Data Connectivity Agreement (Supplement to Database Access Agreement)
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          1.{"    "}DATA CONNECTIVITY
        </Text>
      </Text>
      <Text style={styles.text}>
        1.1{"    "}GISAID will provide You certain EpiCoV™ Data (the “Data
        Package”), by means of an application programming interface in a format
        defined by GISAID (the “API”). The Data Package will be provided solely
        for use in connection with the Web Application described above. The
        metadata fields comprising the Data Package will be determined by GISAID
        based on Your description of the Project.
      </Text>
      <Text style={styles.text}>
        1.2{"    "}You will access the Data Package by means of a personalized
        username and password provided by GISAID.
      </Text>
      <Text style={styles.text}>
        1.3{"    "}You agree that You will not share the username and password
        with any third parties, and that You will employ reasonable and
        appropriate security measures to prevent harm or unauthorized access to
        GISAID servers and applications
      </Text>
      <Text style={styles.text}>
        1.4{"    "}You agree to notify GISAID of any change to your Contact
        Information provided under Section 2(f) of the DAA by email addressed to
        secretariat@gisaid.org.
      </Text>
      <Text style={styles.text}>
        1.5{"    "}You agree that You will inform GISAID as soon as practicable
        if You detect any issue or problem with the API, the delivery of the
        Data Package, or any Data in the Data Package, and will cooperate with
        GISAID to resolve any such issues or problems. You agree also that You
        will inform GISAID if, for any reason, You have stopped, or intend to
        stop, using the Data Package. GISAID will stop providing the Data
        Package on receipt of such notice, or on the date that the notice states
        You will stop using the Data Package, whichever is later. If You do not
        access the API for more than one month, GISAID will automatically stop
        providing the Data Package. You agree also that, if you stop using the
        Data Package in connection with the Web Application, you will disable
        the Web Application, or remove from the Web Application any items that
        use data obtained from GISAID and any references to GISAID.
      </Text>
      <Text style={styles.text}>
        1.6{"    "}If You access the API from a computer owned by Your employer
        or laboratory, or any entity other than Yourself, You agree that You
        will inform that entity of the terms of this Data Connectivity Agreement
        (“Agreement”), and will ask the entity to ensure that, in the event that
        You no longer have access to the computer, the username and password,
        and any Data obtained from GISAID, is deleted from the computer, and
        GISAID is informed.
      </Text>
      <Text style={styles.text}>
        1.7{"    "}GISAID reserves the right to change the format and/or method
        of providing the Data Package to You at any time.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          2.{"    "}HANDLING DATA; ADHERENCE TO THE DAA
        </Text>
      </Text>
      <Text style={styles.text}>
        2.1{"    "}You acknowledge that all EpiCoV™ Data provided to You in the
        Data Package are "Data" within the meaning of the DAA, and that the use
        of such Data is in all respects subject to the terms and conditions of
        the DAA, except as specifically provided herein. You acknowledge that
        the Data Package is being provided solely for use by You in connection
        with the Web Application. You agree that You will not share such Data
        with any other person. You agree also that You will ensure that such
        Data cannot be accessed, downloaded, or used by any other person,
        including, without limitation, through an application programming
        interface or download functionality that serves Data obtained from
        GISAID or data with which Data obtained from GISAID can be
        reverse-engineered or reconstructed.
      </Text>
      <Text style={styles.text}>
        2.2{"    "}You acknowledge that this Agreement does not waive the terms
        of the DAA, including, without limitation, Clause 2(b) of the DAA. You
        acknowledge that this Agreement (a) does not authorize You to use any
        Data in GISAID, other than the Data in the Data Package, in connection
        with the Web Application, and (b) does not authorize You to use the Data
        in the Data Package in connection with any web application, website, or
        database other than the Web Application.
      </Text>
      <Text style={styles.text}>
        2.3{"    "}You acknowledge that an overlap of genetic sequence data from
        different sources, resulting from the addition of duplicates, can
        introduce bias and may distort results. Thus, You agree that only the
        EpiCoV™ Data in the Data Package provided to You through the API may be
        used in connection with the Web Application. You agree that You will not
        use any other Data in GISAID in connection with the Web Application. You
        also agree that You will not use genetic sequence data from any other
        source in connection with the Web Application.
      </Text>
      <Text style={styles.text}>
        2.4{"    "}You agree that You will use the EpiCoV™ Data in the Data
        Package solely in connection with the Web Application, and that You will
        not use such Data in connection with any other web application, website,
        or database, including, without limitation, by enabling others to
        download, access, or use such Data through a separate portal or across a
        network of institutions.
      </Text>
      <Text style={styles.text}>
        2.5{"    "}You agree that the Web Application will remain publicly
        accessible without charge and will not be used for any commercial
        purpose, for profit, or monetized in any way. You agree also that You
        will not change the manner in which the Web Application uses or displays
        EpiCoV™ Data without (a) notifying GISAID of the proposed changes, and
        (2) receiving confirmation from GISAID that such changes are consistent
        with the DAA and this Agreement.
      </Text>
      <Text style={styles.text}>
        2.6{"    "}Between GISAID and You, this Agreement shall be deemed a
        supplement to the DAA. You acknowledge that You are bound by the terms
        and conditions of the DAA.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          3.{"    "}ACKNOWLEDGEMENTS
        </Text>
      </Text>
      <Text style={styles.text}>
        3.1{"    "}3.1 You agree to acknowledge the use of EpiCoV™ Data from
        GISAID by including the following statement in the Web Application:
        “enabled by data from{" "}
        <Image src={GisaidLogo} style={styles.inlineImage} />
        .” The statement shall include the GISAID logo, which shall be clickable
        and link to{" "}
        <Link src="https://www.gisaid.org/">https://www.gisaid.org/</Link>. The
        statement with the GISAID logo shall appear in close proximity to, and
        may be smaller than, the Web Application’s title and/or logo.
      </Text>
      <Text style={styles.text}>
        3.2{"    "}You agree also to acknowledge GISAID and the data
        contributors elsewhere in the Web Application with the following
        statement: “We are grateful to the GISAID Initiative* and the data
        contributors who shared via GISAID the data used in this Web
        Application: the Authors, the Originating Laboratories responsible for
        obtaining the specimens, and the Submitting Laboratories that generated
        the genetic sequences and metadata.” A footnote shall be inserted where
        indicated by the “*”, and shall include a citation to Elbe, S., and
        Buckland-Merrett, G. (2017) Data, disease and diplomacy: GISAID’s
        innovative contribution to global health. Global Challenges, 1:33-46.
        DOI: <Text style={{ color: "#0388fc" }}>10.1002/gch2.1018 </Text>and /
        or Shu, Y., McCauley, J. (2017) GISAID: From vision to reality.
        EuroSurveillance, 22(13) DOI:
        <Text style={{ color: "#0388fc" }}>
          10.2807/1560-7917.ES.2017.22.13.30494
        </Text>
        .
      </Text>
      <Text style={styles.text}>
        3.3{"    "}You agree that any reference to a specific virus and/or
        specimen in the Web Application will provide the relevant GISAID
        Accession Number, the Originating Laboratory and Submitting Laboratory
        (as defined in DAA Section 2(c)), and the individual(s) listed as
        author(s) by the submitter of the Data. This information may be provided
        by a link to a “pop-up” window or similar mechanism. To protect the
        rights of the data contributors, no sequence or metadata associated with
        a single sequence identifier can be displayed.
      </Text>
      <Text style={styles.text}>
        3.4{"    "}You agree that any reference to SARS-CoV-2 in the Web
        Application will be immediately followed by the GISAID nomenclature:
        “(hCoV-19).” You agree also that if the Web Application uses or refers
        to a common reference sequence, such common reference sequence will be
        WIV04, as described on the EpiCoV™ webpage.
      </Text>
      <Text style={styles.text}>
        3.5{"    "}To avoid any misunderstanding on the part of persons using
        your Web Application, and to help ensure the integrity of Data obtained
        from GISAID, you agree to include the following statement in a footer on
        each page of the Web Application: “Data used in this web application
        remain subject to GISAID’s Terms and Conditions{" "}
        <Link src="http://www/gisaid/org/DAA/">http://www/gisaid/org/DAA/</Link>
        ."
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          4.{"    "}MISCELLANEOUS
        </Text>
      </Text>
      <Text style={styles.text}>
        4.1{"    "}As indicated above, all of the terms of the DAA, as modified
        from time to time, are hereby incorporated into this Agreement and shall
        apply to this Agreement as if they were explicitly contained in this
        Agreement, except that EpiCoV™ Data provided by GISAID to You in the
        Data Package may be used by You in connection with the Web Application.
      </Text>
      <Text style={styles.text}>
        4.2{"    "}This Agreement, including the terms of the DAA incorporated
        herein, constitutes the entire agreement between You and GISAID with
        respect to the Data Package; provided, however, that GISAID may, from
        time to time, modify this Agreement and/or the DAA, and may provide
        notice of such modifications via the Contact Information provided under
        Section 2(f) of the DAA. You agree that such notice of any such
        modification to this Agreement and/or to the DAA shall constitute
        adequate written notice of such modifications, and that You will be
        required to acknowledge and agree to any such modifications to this
        Agreement and/or to the DAA by responding to the notification and
        confirming that You accept any such modifications by such time required
        by GISAID in the notification, in order to continue to receive the Data
        Package through the API.
      </Text>
      <Text style={styles.text}>
        {" "}
        <Text style={{ fontFamily: "Times-Bold" }}>Sign Below:</Text>
      </Text>
      <Text style={styles.textMoreSpacing}>
        {name}
        {"     "}
        {date.toISOString().slice(0, 10)}
      </Text>
      <Text style={styles.textMore1Spacing}>
        <Text style={{ fontFamily: "Times-Bold" }}>
          This Application and Data Connectivity Agreement must be accepted and
          signed by an authorized representative of GISAID before the Data
          Package will be provided.
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "Times-Bold" }}>DATA PACKAGE </Text> (to be
        determined by GISAID)
      </Text>
      <Text style={styles.textMoreSpacing}>
        [list of data fields that will be provided – to be filled in by GISAID]
      </Text>
      <Text style={styles.textEvenMoreSpacing}>Freunde von GISAID e.V.</Text>
      <Text style={styles.textLessSpacing}>secretariat@gisaid.org By:</Text>
      <Text style={styles.textLessSpacing}>By:</Text>
      <Text style={styles.textMoreSpacing}>Date:</Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          `GISAID DCA (public web app.) \n 23/1/2021`
        }
        fixed
      />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 50,
  },
  inlineImage: { width: 50 },
  title: {
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 13,
    textAlign: "center",
  },
  text: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  textLessSpacing: {
    marginTop: 2,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  textMore1Spacing: {
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  textMoreSpacing: {
    marginTop: 70,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  textEvenMoreSpacing: {
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Pdf;
