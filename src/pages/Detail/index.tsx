import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import DetailBox from "../../components/DetailBox";
import FRInfoText from "../../components/FRInfoText";
import Layout from "../../components/Layout";
import StatusBar from "../../components/StatusBar";
import styles from './style.module.scss';


function Detail() {

  const { t } = useTranslation()

  const informations = [{
    name: t('document.basicInformation'),
    status: true,
    requirement: true
  },
  {
    name: t('document.registryInformation'),
    status: true,
    requirement: true
  },
  {

    name: t('document.colleteralInformation'),
    status: false,
    requirement: false
  },
  {
    name: t('document.insuranceInformation'),
    status: true,
    requirement: false
  },
  {
    name: t('document.findexInformation'),
    status: true,
    requirement: false
  },
  {
    name: t('document.financialStatement'),
    status: false,
    requirement: false
  },
  {
    name: t('document.legalDocuments'),
    status: true,
    requirement: false
  }]

  const detailBoxData1 = [{
    title: '2019',
    text: '123.132.00 ₺'
  }
    , {
    title: '2019',
    text: '123.132.00 ₺'
  },
  {
    title: '2019',
    text: '123.132.00 ₺'
  }]

  const detailBoxData2 = [{
    title: t("label.expiry"),
    text: "3" + t("label.month")
  }
    , {
    title: t("label.paymentMethod"),
    text: t("label.cash")
  },
  {
    title: t("label.limit"),
    text: '800.000.00 ₺'
  }]



  return (
    <>
      <Layout>
        <Row>
          <Col md={6}>
            <div className={styles.detail}>
              <FRInfoText title={t("label.tradeName")} text={"DENİZ FAKTORİNG ANONİM ŞİRKETİ"} />
              <FRInfoText title={t("label.scope")} text={"Demirçelik"} />
              <FRInfoText title={t("label.guarantee")} text={"2910141668"} />
              <FRInfoText title={t("label.capital")} text={"123.132.00 ₺"} />
              <div className={styles.detailBoxWrapper}>
                <DetailBox title={'Kar Bilgileri'} data={detailBoxData1} />
                <DetailBox title={'Çalışma Koşullar'} data={detailBoxData2} />
              </div>
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
