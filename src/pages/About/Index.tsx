import { motion } from 'framer-motion';
import Curve from '../../curve/Index';

export default function About() {
  return (
    <Curve backgroundColor={'#282828'} >
      <motion.div>
        <h1>About Page</h1>
        <p>This is the About page.</p>
      </motion.div>
    </Curve>
  );
}
