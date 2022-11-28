import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import DetailBox from "../../components/DetailBox";
import FRInfoText from "../../components/FRInfoText";
import Layout from "../../components/Layout";
import StatusBar from "../../components/StatusBar";
import styles from './style.module.scss';


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
          <Col md={6}>
            <div className={styles.x}>
              <FRInfoText title={"Ticaret Ünvanı"} text={"DENİZ FAKTORİNG ANONİM ŞİRKETİ"} />
              <FRInfoText title={"Faaliyet Alanı"} text={"Demirçelik"} />
              <FRInfoText title={"Teminat"} text={"2910141668"} />
              <FRInfoText title={"Sermaye"} text={"123.132.00 ₺"} />
              <DetailBox title={'Kar Bilgileri'} />
              <DetailBox title={'Çalışma Koşullar'} />
            </div>
          </Col>
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
