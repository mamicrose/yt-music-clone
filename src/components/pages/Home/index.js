import Layout from "../../common/Layout";
import Slider from "../../common/Slider";
import QuickSelect from "../../common/Slider/QuickSelect";

export default function Home() {
  return (
    <Layout>
      <Slider title="Yeniden Dinleyin" />

      <Slider title="% 100 Hit" />

      <QuickSelect title="BİR ŞARKIDAN RADYO BAŞLATIN" />

      <Slider title="Sizin için derlenenler" />
    </Layout>
  );
}
