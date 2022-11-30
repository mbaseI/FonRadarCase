import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom";
import DetailBox from "../../components/DetailBox";
import FRInfoText from "../../components/FRInfoText";
import Layout from "../../components/Layout";
import StatusBar from "../../components/StatusBar";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { deleteCustomer, editCustomer, getCustomer, selectDetail } from "./detailSlice";
import { Trash3, PencilSquare } from 'react-bootstrap-icons';
import styles from './style.module.scss';
import { useNavigate } from "react-router-dom";
import FREditModal from "../../components/FREditModal";
import { BackspaceFill } from 'react-bootstrap-icons'

function Detail() {



  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectDetail);
  const customerData = data.customerDetail
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = (id: any) => {
    dispatch(deleteCustomer(id)).then(() => navigate('/'))
  }

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
    dispatch(getCustomer(location.state))
  }, [])

  return (
    <>
      <Layout>
        <div className={styles.backButton}>
          <Button onClick={() => navigate('/')}>
            <BackspaceFill width={'40px'} />
          </Button>
        </div>
        <Row className="mt-5">
          <Col md={6}>

            <div className={styles.detail}>
              <FRInfoText title={t("title.companyName")} text={customerData.companyName} />
              <FRInfoText title={t("title.taxNumber")} text={customerData.taxNumber} />
              <FRInfoText title={t("title.taxOffice")} text={customerData.taxOffice} />
              <FRInfoText title={t("title.invoiceCount")} text={customerData.invoiceCount} />
              <FRInfoText title={t("title.contactNumber")} text={customerData.contactNumber} />
              <div className={styles.detailBoxWrapper}>
                <DetailBox title={'Kar Bilgileri'} data={detailBoxData1} />
                <DetailBox title={'Çalışma Koşullar'} data={detailBoxData2} />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.buttons}>
              <Button onClick={() => onDelete(location.state)}>
                <Trash3 />
              </Button>
              <Button onClick={handleShow}>
                <PencilSquare />
              </Button>
            </div>
            {informations.map((item) => {
              return <StatusBar key={item.id} name={item.name} status={item.status} requirement={item.requirement} />
            })
            }
            <FREditModal handleClose={handleClose} show={show} handleShow={handleShow} editCustomer={editCustomer} userId={location.state} customerData={customerData} />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Detail;
