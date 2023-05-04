import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
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
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Blog
        </Text>

        <Text style={styles.text}>
          1.Tell us the differences between uncontrolled and controlled
          components? Controlled component does not maintain its internal state,
          Data is controlled by the parent component, Accepts its current value
          as a prop. But Uncontrolled component maintains its internal state,
          the data is controlled by the DOM itself, Uses a ref for their current
          values.
        </Text>
        <Text style={styles.text}>
          2.How to validate React props using PropTypes? PropTypes is React's
          internal functionality to add type checking to component props. React
          components use a property called propTypes to set up type checking.
        </Text>
        <Text style={styles.text}>
          3. Tell us the difference between nodejs and express js? Node.js is
          framework of JavaScript which is used to execute JavaScript code
          outside of a browser. Express.js is used to develop complete web
          applications such as single-page, multi-page, and hybrid web
          applications and APIs.
        </Text>
        <Text style={styles.text}>
          4. What is a custom hook, and why will you create a custom hook? A
          custom hook is a reusable function that we can apply in a react
          application. Custom Hooks start with "use". When we need to add any
          logic or functionality across multiple components, we can use that
          custom hook.We will create custom hook because ,they help us to save
          time, are reliable, reusable, and make the code clean.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
