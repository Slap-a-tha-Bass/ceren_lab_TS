import React from "react";
import { Row, Col } from "react-bootstrap";
import RootLayout from "../../components/RootLayout";
import CardLayout from "../../components/CardLayout";

const Research = () => {
  return (
    <RootLayout>
      <h1 className="text-center text-light display-4 mt-4">Our Research</h1>
      <Row xs={1} md={2} className="g-4 transition my-4">
        <Col>
          <CardLayout
            title="A high-protein diet or combination exercise training to
            improve metabolic health in individuals with long-standing
            spinal cord injury: a pilot randomized study"
            content="We compared the effects of an 8-week iso-caloric high-protein (HP) diet ver- sus a combined exercise regimen (Comb-Ex) in individuals with long-standing spinal cord injury (SCI). Effects on metabolic profiles, markers of inflamma- tion, and signaling proteins associated with glucose transporter 4 (GLUT-4) translocation in muscles were evaluated. Eleven participants with SCI com- pleted the study (HP diet: n = 5; Comb-Ex: n = 6; 46  8 years; C5-T12 levels; American Spinal Injury Association Impairment Scale A or B). The Comb-Ex regimen included upper body resistance training (RT) and neuro- muscular electrical stimulation-induced-RT for paralytic quadriceps muscles, interspersed with high-intensity (80–90% VO2 peak) arm cranking exercises 3 days/week. The HP diet included ~30% total energy as protein (carbohy- drate to protein ratio <1.5, ~30% energy from fat). Oral glucose tolerance tests and muscle biopsies of the vastus lateralis (VL) and deltoid muscles were performed before and after the trial. Fasting plasma glucose levels decreased in the Comb-Ex (P < 0.05) group compared to the HP-diet group. A decrease in areas under the curve for insulin and TNF-a concentrations was observed for all participants regardless of group assignment (time effect, P < 0.05). Although both groups exhibited a quantitative increase in insulin sensitivity as measured by the Matsuda Index, the change was clinically meaningful only in the HP diet group (HP diet: pre, 4.6; post, 11.6 vs. Comb-Ex: pre, 3.3; post, 4.6). No changes were observed in proteins associated with GLUT-4 transloca- tion in VL or deltoid muscles. Our results suggest that the HP-diet and Comb-Ex regimen may improve insulin sensitivity and decrease TNF-a con- centrations in individuals with SCI."
            link="www.google.com"
            authors="Jia Li, Keith F. L. Polston, Mualla Eraslan1, C. Scott Bickel, Samuel T. Windham, Amie B. McLain, Robert A. Oster, Marcas M. Bamman & Ceren Yarar-Fisher"
            _published="2 July 2018"
            publisher="Physiological Reports"
          />
        </Col>
        <Col>
          <CardLayout
            title="Heightened TWEAK-NF-κB signaling and
            inflammation-associated fibrosis in paralyzed muscles of
            men with chronic spinal cord injury"
            content="Heightened TWEAK- NF-􏰀B signaling and inflammation-associated fibrosis in paralyzed muscles of men with chronic spinal cord injury. Am J Physiol Endocrinol Metab 310: E754–E761, 2016. First published March 1, 2016; doi:10.1152/ajpendo.00240.2015.—Individuals with long- standing spinal cord injury (SCI) often present with extreme muscle atrophy and impaired glucose metabolism at both the skeletal muscle and whole body level. Persistent inflammation and increased levels of proinflammatory cytokines in the skeletal muscle are potential con- tributors to dysregulation of glucose metabolism and atrophy; how- ever, to date no study has assessed the effects of long-standing SCI on their expression or intracellular signaling in the paralyzed muscle. In the present study, we assessed the expression of genes (TNF􏰁R, TNF􏰁, IL-6R, IL-6, TWEAK, TWEAK R, atrogin-1, and MuRF1) and abundance of intracellular signaling proteins (TWEAK, TWEAK R, NF-􏰀B, and p-p65/p-50/105) that are known to mediate inflamma- tion and atrophy in skeletal muscle. In addition, based on the effects of muscle inflammation on promotion of skeletal muscle fibrosis, we assessed the degree of fibrosis between myofibers and fascicles in both groups. For further insight into the distribution and variability of muscle fiber size, we also analyzed the frequency distribution of SCI fiber size. Resting vastus lateralis (VL) muscle biopsy samples were taken from 11 men with long-standing SCI (􏰂22 yr) and compared with VL samples from 11 able-bodied men of similar age. Our results demonstrated that chronic SCI muscle has heightened TNF􏰁R and TWEAK R gene expression and NF-􏰀B signaling (higher TWEAK R and phospho-NF-􏰀B p65) and fibrosis, along with substantial myofi- ber size heterogeneity, compared with able-bodied individuals. Our data suggest that the TWEAK/TWEAK R/NF-􏰀B signaling pathway may be an important mediator of chronic inflammation and fibrotic adaptation in SCI muscle."
            link="www.google.com"
            authors="Ceren Yarar-Fisher, C. Scott Bickel, Neil A. Kelly, Michael J. Stec, Samuel T. Windham, Amie B. McLain, Robert A. Oster, and Marcas M. Bamman"
            _published="2018"
            publisher=""
          />
        </Col>
        <Col>
          <CardLayout
            title="Research paper 3"
            content="blah blah blah"
            link="www.google.com"
            authors="Jia Li, Keith F. L. Polston, Mualla Eraslan1, C. Scott Bickel, Samuel T. Windham, Amie B. McLain, Robert A. Oster, Marcas M. Bamman & Ceren Yarar-Fisher"
            _published="2018"
            publisher=""
          />
        </Col>
        <Col>
          <CardLayout
            title="Research paper 4"
            content="blah blah blah"
            link="www.google.com"
            authors="Jia Li, Keith F. L. Polston, Mualla Eraslan1, C. Scott Bickel, Samuel T. Windham, Amie B. McLain, Robert A. Oster, Marcas M. Bamman & Ceren Yarar-Fisher"
            _published="2018"
            publisher=""
          />
        </Col>
      </Row>
    </RootLayout>
  );
};

export default Research;
