import { motion } from 'framer-motion';
import Curve from '../../curve/Index'

export default function Home() {
    return (
        <Curve backgroundColor={'#282828'} >
            <motion.div>
                <h1>Home Page</h1>
                <p>Welcome to the Home page.</p>
            </motion.div>
        </Curve>
    );
}
