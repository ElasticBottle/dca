import React from "react";

import { View, Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 60,
    paddingBottom: 80,
    paddingHorizontal: 50,
    fontFamily: "openSans",
  },
  inlineImage: { width: 50 },
  hr: {
    border: "1px solid #000",
    height: 1,
    width: 150,
    color: "black",
    backgroundColor: "black",
    marginLeft: 40,
    marginTop: 70,
  },
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
    fontSize: 10,
    textAlign: "justify",
  },
  textLessSpacing: {
    marginTop: 2,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 10,
    textAlign: "justify",
  },
  textMore1Spacing: {
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 10,
    textAlign: "justify",
  },
  textMoreSpacing: {
    marginTop: 70,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 10,
    textAlign: "justify",
  },
  textEvenMoreSpacing: {
    marginTop: 220,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 10,
    textAlign: "justify",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 7,
    top: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 50,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    position: "absolute",
    fontSize: 7,
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 50,
    textAlign: "left",
    color: "grey",
  },
});

const Pdf = ({
  name,
  email,
  street,
  state,
  zip,
  institute,
  webName,
  webPurpose,
  date = new Date(),
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>DATA CONNECTIVITY APPLICATION</Text>
      <Text style={styles.text}>
        {" "}
        <Text
          style={{
            fontFamily: "openSans",
            fontSize: 10,
            fontStyle: "bold",
          }}
        >
          Name:{"                                      "}
        </Text>
        {name}
      </Text>
      <Text style={styles.textLessSpacing}>
        {" "}
        <Text
          style={{
            fontFamily: "openSans",
            fontSize: 10,
            fontStyle: "bold",
          }}
        >
          Email:{"                                       "}
        </Text>
        {email}
      </Text>
      <Text style={styles.textLessSpacing}>
        {" "}
        <Text
          style={{
            fontFamily: "openSans",
            fontSize: 10,
            fontStyle: "bold",
          }}
        >
          Street Address:{"                     "}
        </Text>
        {street}
      </Text>
      <Text style={styles.textLessSpacing}>
        {"  "}
        <Text
          style={{
            fontFamily: "openSans",
            fontSize: 10,
            fontStyle: "bold",
          }}
        >
          City, State / Province:{"         "}
        </Text>
        {state}
      </Text>
      <Text style={styles.textLessSpacing}>
        {"  "}
        <Text
          style={{
            fontFamily: "openSans",
            fontSize: 10,
            fontStyle: "bold",
          }}
        >
          Country, Zip/Postal Code:{" "}
        </Text>
        {zip}
      </Text>
      <Text style={styles.text}>
        Freunde von GISAID e.V., ("
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          GISAID
        </Text>
        "), operates databases for the collection, aggregation, and sharing of
        genetic sequence data of viruses and related clinical and
        epidemiological data, including the GISAID EpiCoV™ Database (“
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          EpiCoV™ Database
        </Text>
        ”). The terms of access to and use of the GISAID Databases are governed
        by the GISAID Database Access Agreement (the "
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>DAA</Text>
        "). Each natural person who has been granted permission to access and
        use the GISAID Database(s) has agreed to be bound by the DAA.
      </Text>
      <Text style={styles.text}>
        You, {name} ("
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>You</Text>
        ”), are affiliated with {institute}. You have agreed to be bound by the
        DAA, and are an Authorized User within the meaning of the DAA.
      </Text>
      <Text style={styles.text}>
        You are applying for permission from GISAID to store and use certain
        data made available through the EpiCoV™ Database (“
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          EpiCoV™ Data
        </Text>
        ”) in connection with the research project described below (the “
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          Project
        </Text>
        ”), notwithstanding clause 2(b) of the DAA.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          Name of Research Project:{" "}
        </Text>
        {webName}
      </Text>
      <Text style={styles.textLessSpacing}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          Description of Research Project:{" "}
        </Text>
      </Text>
      <Text style={styles.textLessSpacing}>{webPurpose}</Text>
      <Text style={styles.text}>
        By signing this Application, You acknowledge that You have read and
        understand the terms of the Data Connectivity Agreement, below, and that
        You agree to those terms.
      </Text>
      <Text style={styles.text}>
        Once this Application is approved by, and the Data Connectivity
        Agreement is countersigned by, an authorized representative of GISAID,
        You will be provided and permitted to store certain EpiCoV™ Data solely
        for use in connection with the Project, notwithstanding clause 2(b) of
        the DAA. GISAID will determine the metadata fields it will provide based
        on Your description of the Project. To maintain the integrity of Data in
        GISAID, and to protect the interests of data contributors, GISAID does
        not permit duplication of its databases, and will not provide all
        metadata fields.
      </Text>
      <Text style={styles.text}>
        GISAID’s provision of the Data Package will be subject to the terms of
        the Data Connectivity Agreement, below.
      </Text>
      <Text style={styles.text}>
        This{" "}
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          Data Connectivity Agreement (Supplement to Database Access Agreement)
        </Text>
        , the terms of which are set out below, shall be deemed a supplement to
        the Database Access Agreement between GISAID and You:
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          1.{"    "}DATA CONNECTIVITY
        </Text>
      </Text>
      <Text style={styles.text}>
        1.1{"    "}GISAID will provide You certain EpiCoV™ Data (the “Data
        Package”), to be determined by GISAID, by means of an application
        programming interface in a format defined by GISAID (the “API”). The
        Data Package will be provided solely for use in connection with the
        Project described above.
      </Text>
      <Text style={styles.text}>
        1.2{"    "}You acknowledge that GISAID may find it necessary to change
        the format and/or method of providing the Data Package to You. In such
        an event, GISAID will endeavor to provide as much advance notice as is
        practicable.
      </Text>
      <Text style={styles.text}>
        1.3{"    "}You will access the Data Package by means of a personalized
        username and password provided by GISAID
      </Text>
      <Text style={styles.text}>
        1.4{"    "}You agree that You will not share the username and password
        with any third parties, and that You will employ reasonable and
        appropriate security measures to prevent harm or unauthorized access to
        GISAID servers and applications.
      </Text>
      <Text style={styles.text}>
        1.5{"    "}You agree to notify GISAID of any change to your Contact
        Information provided under Section 2(f) of the DAA by email addressed to
        secretariat@gisaid.org.
      </Text>
      <Text style={styles.text}>
        1.6{"    "}You agree that You will inform GISAID as soon as is
        practicable if You detect any issue or problem with the API, the
        delivery of the Data Package, or any Data in the Data Package, and will
        cooperate with GISAID to resolve any such issues or problems. You agree
        also that You will inform GISAID if, for any reason, You have stopped,
        or intend to stop, using the Data Package. GISAID will stop providing
        the Data Package on receipt of such notice, or on the date that the
        notice states you will stop using the Data Package, whichever is later.
        If You do not access the API for more than one month, GISAID will
        automatically stop providing the Data Package.
      </Text>
      <Text style={styles.text}>
        1.7{"    "}If You access the API from a computer owned by Your employer
        or laboratory, or any entity other than Yourself, You agree that You
        will inform that entity of the terms of this Data Connectivity Agreement
        (“Agreement”), and will ask the entity to ensure that, in the event that
        You no longer have access to the computer, the username and password,
        and any Data obtained from GISAID, is deleted from the computer, and
        GISAID is informed.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          2.{"    "}HANDLING DATA; ADHERENCE TO THE DAA
        </Text>
      </Text>
      <Text style={styles.text}>
        2.1{"    "}Between GISAID and You, this Agreement shall be deemed a
        supplement to the DAA. You acknowledge that You are bound by the terms
        and conditions of the DAA.
      </Text>
      <Text style={styles.text}>
        2.2{"    "}You acknowledge that all EpiCoV™ Data provided to You in the
        Data Package are "Data" within the meaning of the DAA, and that the use
        of such Data is in all respects subject to the terms and conditions of
        the DAA, except as specifically provided herein. You acknowledge that
        the Data Package is being provided solely for use by You in connection
        with the Project. You agree that you will ensure that such Data cannot
        be accessed or downloaded through the API by any other person, and that
        You will not allow any other person access to such Data through an
        application programming interface or download functionality that serves
        Data obtained from GISAID or data with which Data obtained from GISAID
        Data can be reverse-engineered or reconstructed.
      </Text>
      <Text style={styles.text}>
        2.3{"    "}You agree that You that will not allow any third party who is
        not a GISAID Authorized User access to any Data obtained through GISAID
      </Text>
      <Text style={styles.text}>
        2.4{"    "}You agree that, if the Project is accessible to any third
        parties, the Project will include the following statement: “Data
        obtained through GISAID remains subject to the terms of use set out in
        GISAID’s Database Access Agreement.”
      </Text>
      <Text style={styles.text}>
        2.5{"    "}You agree that, if the Project exposes any Data obtained
        through GISAID, you will ensure that any third party with access to the
        Project is an Authorized User with valid access credentials under the
        DAA. You agree also that You will provide GISAID with the names and
        contact information of any such persons in a timely manner, by email
        addressed to secretariat@gisaid.org, with the subject line “Notice of
        Authorized Users with access to Project exposing Data in GISAID.”
      </Text>
      <Text style={styles.text}>
        2.6{"    "}You agree that the only the Data in the Data Package provided
        to You through the API may be used in connection with the Project, and
        that You will not download and use additional Data in GISAID in
        connection with the Project.
      </Text>
      <Text style={styles.text}>
        2.7{"    "}You agree that You will use the Data in the Data Package
        solely in connection with the Project described above, and that You will
        not use such Data in connection with any other project, web application,
        website, database, or program, including, without limitation, by
        enabling others to download, access, or use such Data through a separate
        portal or across a network of institutions.
      </Text>
      <Text style={styles.text}>
        2.8{"    "}You acknowledge that this Agreement does not waive the terms
        of the DAA, including, without limitation, Clause 2(b) of the DAA. You
        acknowledge that this Agreement (a) does not authorize You to use any
        Data in GISAID, other than the Data in the Data Package, in connection
        with the Project, and (b) does not authorize You to use the Data in the
        Data Package in connection with any other project, web application, or
        website, or to store such Data other than in connection with the
        Project.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          3.{"    "}MISCELLANEOUS
        </Text>
      </Text>
      <Text style={styles.text}>
        3.1{"    "}As indicated above, all of the terms of the DAA, as modified
        from time to time, are hereby incorporated into this Agreement and shall
        apply to this Agreement as if they were explicitly contained in this
        Agreement, except that you may store Data in the Data Package for use in
        connection with the Project.
      </Text>
      <Text style={styles.text}>
        3.2{"    "}This Agreement, including the terms of the DAA incorporated
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
      <Text style={styles.textMore1Spacing}>
        {" "}
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          Sign Below:
        </Text>
      </Text>
      <View style={styles.hr} />
      <Text style={styles.text}>
        {name}
        {"     "}
        {date.toISOString().slice(0, 10)}
      </Text>
      <Text style={styles.textMore1Spacing}>
        <Text style={{ fontFamily: "openSans", fontStyle: "bold" }}>
          This Application must be approved by, and the Data Connectivity
          Agreement must be countersigned by, an authorized representative of
          GISAID before the Data Package will be provided.
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text
          style={{
            fontFamily: "openSans",
            fontStyle: "bold",
            textAlign: "center",
          }}
        >
          DATA PACKAGE{" "}
        </Text>
      </Text>
      {/* // TODO ADd more space above for the data package. */}
      <Text style={styles.textEvenMoreSpacing}>Freunde von GISAID e.V.</Text>
      <Text style={styles.textLessSpacing}>By:</Text>
      <View style={styles.hr} />
      <Text style={styles.text}>Date:</Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber === 1 ? "" : pageNumber}`
        }
        fixed
      />
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Reproduction or redistribution of the Application and/or Data Connectivity Agreement, in whole or in part, is not permitted without express written authorization of GISAID. \n APPLICATION DCA (Research Project). 30/1/2021`
        }
        fixed
      />
    </Page>

    {/* // TODO GET SOME TEXT over to the new page */}
  </Document>
);

export default Pdf;
