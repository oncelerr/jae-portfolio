import { motion } from 'framer-motion';
import Curve from '../../curve/Index';

export default function Contact() {
  return (
    <Curve backgroundColor={'#282828'} >
      <motion.div>
        <h1>Contact Page</h1>
        <p>Get in touch with us here.</p>
      </motion.div>
    </Curve>
  );
}
