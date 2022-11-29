import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom";
import DetailBox from "../../components/DetailBox";
import FRInfoText from "../../components/FRInfoText";
import Layout from "../../components/Layout";
import StatusBar from "../../components/StatusBar";
import { useAppDispatch } from "../../config/hooks";
import { getCustomer } from "./detailSlice";
import styles from './style.module.scss';


function Detail() {
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const informations = [{
    id: "1",
    name: t('document.basicInformation'),
    status: true,
    requirement: true
  },
  {
    id: "2",
    name: t('document.registryInformation'),
    status: true,
    requirement: true
  },
  {
    id: "3",
    name: t('document.colleteralInformation'),
    status: false,
    requirement: false
  },
  {
    id: "4",
    name: t('document.insuranceInformation'),
    status: true,
    requirement: false
  },
  {
    id: "5",
    name: t('document.findexInformation'),
    status: true,
    requirement: false
  },
  {
    id: "6",
    name: t('document.financialStatement'),
    status: false,
    requirement: false
  },
  {
    id: "7",
    name: t('document.legalDocuments'),
    status: true,
    requirement: false
  }]

  const detailBoxData1 = [{
    id: '1',
    title: '2019',
    text: '123.132.00 ₺'
  },
  {
    id: '2',
    title: '2019',
    text: '123.132.00 ₺'
  },
  {
    id: '3',
    title: '2019',
    text: '123.132.00 ₺'
  }]

  const detailBoxData2 = [{
    id: '4',
    title: t("label.expiry"),
    text: "3" + t("label.month")
  },
  {
    id: '5',
    title: t("label.paymentMethod"),
    text: t("label.cash")
  },
  {
    id: '6',
    title: t("label.limit"),
    text: '800.000.00 ₺'
  }]

  useEffect(() => {
    console.log(location.state)
  }, [location])

  useEffect(() => {
    dispatch(getCustomer(location.state))
  })

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
              return <StatusBar key={item.id} name={item.name} status={item.status} requirement={item.requirement} />
            })
          }</Col>
        </Row>
      </Layout>
    </>
  );
}

export default Detail;
