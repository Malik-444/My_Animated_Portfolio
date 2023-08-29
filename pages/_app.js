import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
// framer
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait" className="z-50">
        <motion.div key={router.pathname} className="h-full ">
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
