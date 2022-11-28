import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import Layout from "../../components/Layout";
import StatusBar from "../../components/StatusBar";



function Detail() {

  const informations = [{
    name: 'Temel Bilgiler',
    status: true,
    requirement: true
  },
  {
    name: 'Ticari Sicil Gazatesi Bilgileri',
    status: true,
    requirement: true
  },
  {
    name: 'Teminat bilgileri',
    status: false,
    requirement: false
  },
  {
    name: 'Alacak Sigortası Bilgileri',
    status: true,
    requirement: false
  },
  {
    name: 'Findeks Bilgileri',
    status: true,
    requirement: false
  },
  {
    name: 'Mali Tablolar',
    status: false,
    requirement: false
  },
  {
    name: 'Legal Evraklar',
    status: true,
    requirement: false
  }]
  const { t } = useTranslation()
  return (
    <>
      <Layout>
        <Row>
          <Col md={6}>a</Col>
          <Col md={6}> {
            informations.map((item) => {
              return <StatusBar name={item.name} status={item.status} requirement={item.requirement} />
            })
          }</Col>
        </Row>

      </Layout>
    </>
  );
}

export default Detail;
