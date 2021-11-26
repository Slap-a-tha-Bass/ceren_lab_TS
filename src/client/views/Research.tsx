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
            title="Gut Microbiome Composition and Serum Metabolome Profile Among Individuals With Spinal Cord Injury and Normal Glucose Tolerance or Prediabetes/Type 2 Diabetes"
            objective="Objective: To compare the gut microbiome composition and serum metabolome profile among individuals with spinal cord injury (SCI) and nor- mal glucose tolerance (NGT) or prediabetes/type 2 diabetes (preDM/T2D)."
            design="Design: Cross-sectional design."
            setting="Setting: Research university."
            participants="Participants: A total of 25 adults (N=25) with SCI were included in the analysis and categorized as NGT (n=16) or preDM/T2D (n=9) based on their glucose concentration at minute 120 during a 75-g oral glucose tolerance test. The American Diabetes Association diagnosis guideline was used for grouping participants."
            interventions="Interventions: Not applicable."
            measures="Main Outcome Measures: A stool sample was collected and used to assess the gut microbiome composition (alpha and beta diversity, microbial abundance) via the 16s ribosomal RNA sequencing technique. A fasting serum sample was used for liquid chromatography−mass spectrometry −based untargeted metabolomics analysis, the results from which reflect the relative quantity of metabolites detected and identified. Gut micro- biome and metabolomics data were analyzed by the Quantitative Insights into Microbial Ecology 2 and Metaboanalyst platforms, respectively. Results: Gut microbiome alpha diversity (Pielou’s evenness index, Shannon’s index) and beta diversity (weighted UniFrac distances) differed between groups. Compared with participants with NGT, participants with preDM/T2D had less evenness in microbial communities. In particular, those with preDM/T2D had a lower abundance of the Clostridiales order and higher abundance of the Akkermansia genus, as well as higher serum levels of gut-derived metabolites, including indoxyl sulfate and phenylacetylglutamine (P < .05 for all)."
            conclusions="Conclusions: Our results provide evidence for altered gut microbiome composition and dysregulation of gut-derived metabolites in participants with SCI and preDM/T2D. Both indoxyl sulfate and phenylacetylglutamine have been implicated in the development of cardiovascular diseases in the able-bodied population. These findings may inform future investigations in the field of SCI and cardiometabolic health."
            link="www.google.com"
            authors="Jia Li, PhD, Casey Morrow, PhD, Stephen Barnes, PhD, Landon Wilson, BSc, Erika D. Womack, PhD, Amie McLain, MD, Ceren Yarar-Fisher, PT, PhD"
            _published="2021"
            publisher="Archives of Physical Medicine and Rehabilitation"
            _pmid="000:1-9"
          />
        </Col>
        <Col>
          <CardLayout
            title="Gut Microbiome Composition and Serum Metabolome Profile Among Individuals With Spinal Cord Injury and Normal Glucose Tolerance or Prediabetes/Type 2 Diabetes"
            objective="Objective: Compare the gut microbiome composition among individuals with acute spinal cord injury (A-SCI), long-standing SCI (L-SCI), vs. able-bodied (AB) controls."
            design="Design: Cross-sectional design."
            setting="Setting: The University of Alabama at Birmingham."
            participants="Seven adults with A-SCI (36 ± 12 years, 2F/5M, C4-T10, and American Spinal Injury Association Impairment Scale [AIS] A–D), 25 with L-SCI (46 ± 13 years, 6F/19M, C4-L1, and AIS A–D), and 25 AB controls (42 ± 13 years, 9F/16M)."
            interventions="Interventions: Not applicable."
            measures="Methods: Stool samples were collected after a median of 7 days and 18 years after injury in the A-SCI and L-SCI groups, respectively. Gut microbiome composition was analyzed using the 16S rRNA sequencing technique and QIIME software. The abundances of bacteria communities among groups were compared using the Kruskal–Wallis test adjusted for age."
            conclusions="Conclusion: Our results revealed differences in the gut microbiome composition among groups. Compared to the AB controls, the SCI groups demonstrated microbiome profiles that shared features linked to metabolic syndrome, inflammation-related bowel disorders, depressive disorders, or antibiotics use, whereas the L-SCI group’s microbiome included features linked to reduced physical activity compared to the A-SCI and AB controls. Our results provided preliminary data and a scientific foundation for future studies investigating the impact of the gut microbiome composition on long-term health in individuals with SCI."
            link="www.google.com"
            authors="Jia Li, William Van Der Pol, Mualla Eraslan, Amie McLain, Hatice Cetin, Baris Cetin, Casey Morrow, Tiffany Carson, Ceren Yarar-Fisher"
            _published="2020"
            publisher="The Journal of Spinal Cord Medicine"
            _pmid="000:1-9"
          />
        </Col>
        <Col>
          <CardLayout
            title="Evaluation of a ketogenic diet for improvement of neurological recovery in individuals with acute spinal cord injury: a pilot, randomized safety and feasibility trial"
            objective = "Objectives: (1) Test the safety and feasibility of a ketogenic diet (KD) intervention in the acute stages of spinal cord injury (SCI), (2) assess the effects of a KD on neurological recovery, and (3) identify potential serum biomarkers associated with KD-induced changes in neurological recovery."
            design ="Study design: Longitudinal, randomized study."
            setting = "Setting: Acute care and rehabilitation facility."
            measures = "Methods: The KD is a high-fat, low-carbohydrate diet that includes ≈70–80% total energy as fat. Seven participants with acute complete and incomplete SCI (AIS A–D) were randomly assigned to KD (n=4) or standard diet (SD, n=3). Neurological examinations, resting energy expenditure analysis, and collection of blood for evaluation of circulating ketone levels were performed within 72 h of injury and before discharge. Untargeted metabolomics analysis was performed on serum samples to identify potential serum biomarkers that may explain differential responses between groups."
            results = "Results: Our pilot findings primarily demonstrated that KD is safe and feasible to be administered in acute SCI. Furthermore, upper extremity motor scores were higher (p < 0.05) in the KD vs. SD group and an anti-inflammatory lysophospholipid, lysoPC 16:0, was present at higher levels, and an inflammatory blood protein, fibrinogen, was present at lower levels in the KD serum samples vs. SD serum samples."
            conclusions = "Conclusion: Taken together, these preliminary results suggest that a KD may have anti-inflammatory effects that may promote neuroprotection, resulting in improved neurological recovery in SCI. Future studies with larger sample size are warranted for demonstrating efficacy of KD for improving neurological recovery."
            link="www.google.com"
            authors="Ceren Yarar-Fisher, Adarsh Kulkarni, Jia Li, Paige Farley, Cassandra Renfro, Hammad Aslam1, Patrick Bosarge4, Landon Wilson, Stephen Barnes"
            _published="28 August 2018"
            publisher="International Spinal Cord Society"
          />
        </Col>
        <Col>
          <CardLayout
            title="A high-protein diet or combination exercise training to
              improve metabolic health in individuals with long-standing
              spinal cord injury: a pilot randomized study"
            objective="We compared the effects of an 8-week iso-caloric high-protein (HP) diet versus a combined exercise regimen (Comb-Ex) in individuals with long-standing spinal cord injury (SCI). Effects on metabolic profiles, markers of inflammation, and signaling proteins associated with glucose transporter 4 (GLUT-4) translocation in muscles were evaluated." 
            participants = "Eleven participants with SCI com- pleted the study (HP diet: n = 5; Comb-Ex: n = 6; 46  8 years; C5-T12 levels; American Spinal Injury Association Impairment Scale A or B)." 
            measures = {`The Comb-Ex regimen included upper body resistance training (RT) and neuro- muscular electrical stimulation-induced-RT for paralytic quadriceps muscles, interspersed with high-intensity (80–90% VO2 peak) arm cranking exercises 3 days/week. 
            The HP diet included ~30% total energy as protein (carbohy- drate to protein ratio <1.5, ~30% energy from fat). Oral glucose tolerance tests and muscle biopsies of the vastus lateralis (VL) and deltoid muscles were performed before and after the trial. 
            Fasting plasma glucose levels decreased in the Comb-Ex (P < 0.05) group compared to the HP-diet group.`} 
            results = {`A decrease in areas under the curve for insulin and TNF-a concentrations was observed for all participants regardless of group assignment (time effect, P < 0.05). 
            Although both groups exhibited a quantitative increase in insulin sensitivity as measured by the Matsuda Index, the change was clinically meaningful only in the HP diet group (HP diet: pre, 4.6; post, 11.6 vs. Comb-Ex: pre, 3.3; post, 4.6). 
            No changes were observed in proteins associated with GLUT-4 transloca- tion in VL or deltoid muscles.`} 
            conclusions = "Our results suggest that the HP-diet and Comb-Ex regimen may improve insulin sensitivity and decrease TNF-a con- centrations in individuals with SCI."
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
            content="Heightened TWEAK- NF-&kappa;B signaling and inflammation-associated fibrosis in paralyzed muscles of men with chronic spinal cord injury. Am J Physiol Endocrinol Metab 310: E754–E761, 2016. First published March 1, 2016; doi:10.1152/ajpendo.00240.2015.—Individuals with long- standing spinal cord injury (SCI) often present with extreme muscle atrophy and impaired glucose metabolism at both the skeletal muscle and whole body level. Persistent inflammation and increased levels of proinflammatory cytokines in the skeletal muscle are potential contributors to dysregulation of glucose metabolism and atrophy; however, to date no study has assessed the effects of long-standing SCI on their expression or intracellular signaling in the paralyzed muscle." 
            objective = "In the present study, we assessed the expression of genes (TNF&alpha;R, TNF&alpha;, IL-6R, IL-6, TWEAK, TWEAK R, atrogin-1, and MuRF1) and abundance of intracellular signaling proteins (TWEAK, TWEAK R, NF-&kappa;B, and p-p65/p-50/105) that are known to mediate inflammation and atrophy in skeletal muscle. In addition, based on the effects of muscle inflammation on promotion of skeletal muscle fibrosis, we assessed the degree of fibrosis between myofibers and fascicles in both groups. For further insight into the distribution and variability of muscle fiber size, we also analyzed the frequency distribution of SCI fiber size." 
            measures = "Resting vastus lateralis (VL) muscle biopsy samples were taken from 11 men with long-standing SCI (~22 yr) and compared with VL samples from 11 able-bodied men of similar age." 
            results = "Our results demonstrated that chronic SCI muscle has heightened TNF&alpha;R and TWEAK R gene expression and NF-&kappa;B signaling (higher TWEAK R and phospho-NF-&kappa;B p65) and fibrosis, along with substantial myofiber size heterogeneity, compared with able-bodied individuals."
            conclusions = "Our data suggest that the TWEAK/TWEAK R/NF-&kappa;B signaling pathway may be an important mediator of chronic inflammation and fibrotic adaptation in SCI muscle."
            link="www.google.com"
            authors="Ceren Yarar-Fisher, C. Scott Bickel, Neil A. Kelly, Michael J. Stec, Samuel T. Windham, Amie B. McLain, Robert A. Oster, and Marcas M. Bamman"
            _published="2018"
            publisher=""
          />
        </Col>
      </Row>
    </RootLayout>
  );
};

export default Research;
