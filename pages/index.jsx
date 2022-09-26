import { motion } from "framer-motion";
import InViewDemo from "../components/InView";
import Staggering from "../components/Staggering";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        Framer Motion demo
      </motion.h2>
      <Staggering />
      <article className={styles.wrapper}>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci provident facere consequatur accusamus sit cupiditate, enim
          delectus nam obcaecati itaque. Eius eaque suscipit impedit explicabo
          doloremque perspiciatis sit porro dolorum et? Corrupti vitae ipsam
          quidem magni optio quas voluptatum rerum totam cumque atque, sed qui,
          sequi reiciendis modi blanditiis maxime inventore! Recusandae sed iure
          dolorum? Deserunt facere aperiam sapiente soluta optio asperiores
          ullam delectus quae minus suscipit amet praesentium et alias quasi sit
          voluptatem, consequatur quo vel eligendi magni non perspiciatis vero.
          Veritatis, officia? Totam incidunt, quae nulla eaque exercitationem
          facere voluptatibus? Minus aliquam dolor delectus quasi fuga incidunt.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sint
          autem iste necessitatibus quisquam vitae eveniet minus laboriosam
          inventore accusantium tenetur, cumque dicta perspiciatis maxime nam
          iure. Reprehenderit animi ipsum quo assumenda nobis perferendis
          debitis voluptatem doloremque sit quam asperiores quos est, iusto at
          illum expedita sapiente ullam eveniet a.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci provident facere consequatur accusamus sit cupiditate, enim
          delectus nam obcaecati itaque. Eius eaque suscipit impedit explicabo
          doloremque perspiciatis sit porro dolorum et? Corrupti vitae ipsam
          quidem magni optio quas voluptatum rerum totam cumque atque, sed qui,
          sequi reiciendis modi blanditiis maxime inventore! Recusandae sed iure
          dolorum? Deserunt facere aperiam sapiente soluta optio asperiores
          ullam delectus quae minus suscipit amet praesentium et alias quasi sit
          voluptatem, consequatur quo vel eligendi magni non perspiciatis vero.
          Veritatis, officia? Totam incidunt, quae nulla eaque exercitationem
          facere voluptatibus? Minus aliquam dolor delectus quasi fuga incidunt.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sint
          autem iste necessitatibus quisquam vitae eveniet minus laboriosam
          inventore accusantium tenetur, cumque dicta perspiciatis maxime nam
          iure. Reprehenderit animi ipsum quo assumenda nobis perferendis
          debitis voluptatem doloremque sit quam asperiores quos est, iusto at
          illum expedita sapiente ullam eveniet a.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci provident facere consequatur accusamus sit cupiditate, enim
          delectus nam obcaecati itaque. Eius eaque suscipit impedit explicabo
          doloremque perspiciatis sit porro dolorum et? Corrupti vitae ipsam
          quidem magni optio quas voluptatum rerum totam cumque atque, sed qui,
          sequi reiciendis modi blanditiis maxime inventore! Recusandae sed iure
          dolorum? Deserunt facere aperiam sapiente soluta optio asperiores
          ullam delectus quae minus suscipit amet praesentium et alias quasi sit
          voluptatem, consequatur quo vel eligendi magni non perspiciatis vero.
          Veritatis, officia? Totam incidunt, quae nulla eaque exercitationem
          facere voluptatibus? Minus aliquam dolor delectus quasi fuga incidunt.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sint
          autem iste necessitatibus quisquam vitae eveniet minus laboriosam
          inventore accusantium tenetur, cumque dicta perspiciatis maxime nam
          iure. Reprehenderit animi ipsum quo assumenda nobis perferendis
          debitis voluptatem doloremque sit quam asperiores quos est, iusto at
          illum expedita sapiente ullam eveniet a.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci provident facere consequatur accusamus sit cupiditate, enim
          delectus nam obcaecati itaque. Eius eaque suscipit impedit explicabo
          doloremque perspiciatis sit porro dolorum et? Corrupti vitae ipsam
          quidem magni optio quas voluptatum rerum totam cumque atque, sed qui,
          sequi reiciendis modi blanditiis maxime inventore! Recusandae sed iure
          dolorum? Deserunt facere aperiam sapiente soluta optio asperiores
          ullam delectus quae minus suscipit amet praesentium et alias quasi sit
          voluptatem, consequatur quo vel eligendi magni non perspiciatis vero.
          Veritatis, officia? Totam incidunt, quae nulla eaque exercitationem
          facere voluptatibus? Minus aliquam dolor delectus quasi fuga incidunt.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sint
          autem iste necessitatibus quisquam vitae eveniet minus laboriosam
          inventore accusantium tenetur, cumque dicta perspiciatis maxime nam
          iure. Reprehenderit animi ipsum quo assumenda nobis perferendis
          debitis voluptatem doloremque sit quam asperiores quos est, iusto at
          illum expedita sapiente ullam eveniet a.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          adipisci provident facere consequatur accusamus sit cupiditate, enim
          delectus nam obcaecati itaque. Eius eaque suscipit impedit explicabo
          doloremque perspiciatis sit porro dolorum et? Corrupti vitae ipsam
          quidem magni optio quas voluptatum rerum totam cumque atque, sed qui,
          sequi reiciendis modi blanditiis maxime inventore! Recusandae sed iure
          dolorum? Deserunt facere aperiam sapiente soluta optio asperiores
          ullam delectus quae minus suscipit amet praesentium et alias quasi sit
          voluptatem, consequatur quo vel eligendi magni non perspiciatis vero.
          Veritatis, officia? Totam incidunt, quae nulla eaque exercitationem
          facere voluptatibus? Minus aliquam dolor delectus quasi fuga incidunt.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sint
          autem iste necessitatibus quisquam vitae eveniet minus laboriosam
          inventore accusantium tenetur, cumque dicta perspiciatis maxime nam
          iure. Reprehenderit animi ipsum quo assumenda nobis perferendis
          debitis voluptatem doloremque sit quam asperiores quos est, iusto at
          illum expedita sapiente ullam eveniet a.
        </p>
        <InViewDemo />
      </article>      
    </div>
  );
}
