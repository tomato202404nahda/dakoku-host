import QRCode from "qrcode.react";
import { useEffect, useState } from "react";
import Clock from "react-clock";

interface QRData {
  qrname: string;
  qrnumber: string;
  qrclient: string;
}

const hostpage: React.FC = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [qrdata, setQrdata] = useState<QRData>({
    qrname: "",
    qrnumber: "",
    qrclient: "http://localhost:3000/client",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQrdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateQrCodeValue = () => {
    const { qrclient, qrname, qrnumber } = qrdata;
    return `${qrclient}?qrname=${encodeURIComponent(
      qrname
    )}&qrnumber=${encodeURIComponent(qrnumber)}`;
  };

  return (
    <>
      <QRCode value={generateQrCodeValue()} />
      <Clock value={value} />
      <br />
      <div>
        first value:
        <input
          name="qrname"
          value={qrdata.qrname}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        second value:
        <input
          name="qrnumber"
          value={qrdata.qrnumber}
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default hostpage;
