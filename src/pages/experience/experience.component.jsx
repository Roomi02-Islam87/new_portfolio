import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/download.jpeg";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">CURRENT JOB</h1>
            <Jumbotron className="jumbostyle">
                <Container className="">
                    <Tilt options={{max:25}}>
                    <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="LTIMindtree logo" />
                    </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Data Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style "> Data Engineer</strong>
                    <br />
                    <strong>Technology:</strong> AWS, GCP, Python, MySQL, Airflow, Spark, Snowflake
                    <br />
                    <strong>Duration:</strong> 23rd August,2021-Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Worked on<strong> EMR Migration, NiFi Migration, Data Refineries and Data Ingestion.</strong> </li>
                      <li>Hands on experience with <strong>AWS S3, Snowflake cloud data warehouse and NoSQL databases CASSANDRA</strong>.</li>

                      
                      <li>Responsible for Code changes, research and develop solutions for challenging new and unknown issues to run the
shell-script in <strong>EMR Cluster </strong>for the production. </li>
                      <li>Hands on experience with<strong> Apache Airflow</strong> for s3 bucket and<strong> Snowflake data warehouse </strong>and create dags to run the
Airflow.</li>
                      <li>Hands on experience on<strong> Azure Services</strong> like Azure Data Lake, Azure Key Vault, Azure ActiveDirectory, Azure Databricks.</li>

                      <li>Hands on experience in migrating on premise <strong> ETLs</strong> to <strong> Google Cloud Platform (GCP) </strong>using cloudnative tools such as
BIG query, Cloud Data Proc, Google Cloud Storage, Composer.
</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
                </Card.Body>

            </Card>
        </Tilt>
    </Container>
</Jumbotron>

            
        </div>
    )
}

export default Experience
