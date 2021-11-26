import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardLayout from "../../components/CardLayout";
import ScrollButton from "../../components/ScrollButton";

const People = () => {
  return (
    <Container>
      <h1 className="display-2 text-center mt-4">People and Values</h1>
      <Row xs={1} md={2} className="g-4 transition my-4">
        <Col>
          <CardLayout
            title="Ceren Yarar-Fisher, PT PhD"
            position="Principal Investigator"
            biography={`Dr. Yarar-Fisher is an Associate Professor at the UAB Department of Physical Medicine and Rehabilitation 
          in the UAB Heersink School of Medicine. 
          Her translational research program focuses on understanding the pathophysiology of traumatic spinal cord injury 
          (SCI) in the acute and chronic stages with the purpose of developing novel dietary and rehabilitation strategies 
          to improve neuro-recovery, metabolism, and bowel function. 
          Thus, her laboratory is currently developing and testing therapeutic diets and electrical stimulation programs 
          to evaluate new ways to prevent neuronal death and promote recovery and function in the acute stages and improve 
          body composition, gut microbiome composition, and skeletal muscle and metabolic health in the chronic stages of 
          SCI. She has received several NIH and NIDILRR funding to support her investigations in SCI. 
          She recently selected as one of the 10 Outstanding Young Persons of Turkey by Junior Chamber International 
          for her work in Academic leadership and/or accomplishment. She served two years as Treasurer, Chair-Elect, 
          and Chair in American Congress of Rehabilitation Medicine (ACRM) SCI-Special Interest Group, and is a member of 
          ACRM, Academy of Spinal Cord Injury Professionals, American College of Sports Medicine and American Physiological 
          Society. Dr. Yarar-Fisher has had the privilege of mentoring a wide variety of students and trainees, including 
          3 high school students, 5 medical students, 3 Physical Medicine and Rehabilitation residents, 10 physical 
          therapy students, 2 doctoral students, and 1 post-doctoral trainee. She has also mentored 4 international 
          visiting doctoral students and 2 visiting faculty from Hacettepe University/Turkey via Erasmus International 
          Credit Mobility Program. Among her students, over 70% are racial ethnic minorities.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Erika Womack, PhD"
            position="Laboratory Manager"
            biography={`I grew up in Cleveland, MS (home of the Fighting Okra, yes look it up). 
            I attended Mississippi State University for my undergraduate degree in Biological Sciences and 
            Mississippi College for my master’s degree in Biomedical Sciences. I have worked for the University 
            of Mississippi Medical Center (UMMC) as a researcher for 7 years studying adolescent pediatric 
            scoliosis in the pediatric population before returning to Mississippi State University for my 
            doctorate degree in molecular biology and biochemistry. I worked for the USDA-ARS as a post-doctoral f
            ellow for 3 years as a geneticist prior to joining Dr. Yarar-Fisher’s team where I am the laboratory 
            manager and a researcher. Dr. Yarar-Fisher’s program investigating spinal cord injury compliments some 
            techniques that I have learned along my academic and professional career but, most importantly, has 
            encompassed many new and exciting disciplines and techniques including bioinformatics, tissue culture, 
            RNAseq, metabolic profiling, immunohistochemistry, and other procedures to study individuals with SCI. 
            As a researcher, I contribute to running experiments, data analysis and writing and editing of manuscripts.
            My laboratory manager duties include keeping the laboratory safe and legal, reconciliation of accounts, 
            and mentorship and training of physicians and medical, physical therapy, undergraduate, and high school 
            students in the laboratory. Some of my interests outside of the lab include playing sports, hanging out 
            with family and friends, home improvement, traveling domestically to explore different cities along with 
            their food and culture, tailgating, and relaxing.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Jia Li, PhD"
            position="Post-Doctoral Fellow"
            biography={`I am a 4th year post-doctoral scholar at Rehabilitation Medicine Laboratory. I am from China, 
            and I earned my master’s degree in Molecular Genetics from the University of Cincinnati and my PhD 
            degree in Nutrition Sciences from Purdue University. During my PhD training, I was involved with 
            clinical trials investigating several aspects of dietary components on metabolic health outcomes. I 
            greatly appreciated the applicability of human clinical nutrition research. In the meanwhile, I became 
            interested in exploring the underlying mechanisms for the development of cardio-metabolic diseases. I 
            joined Dr. Yarar-Fisher’s lab in 2017 to further expand my training in nutrition research and gain 
            additional skillset in microbiome and metabolomics analyses. My current research projects include: 1) 
            investigating the effects of a high-protein/low-carbohydrate diet on body composition, metabolic health, 
            and gut microbiome in patients with long-standing spinal cord injury and 2) understanding the 
            relationship between gut microbiome and glucose control in individuals with SCI supported by the NIDILRR 
            Mary Switzer Research fellowship and Craig Nielsen Foundation postdoctoral fellowship. I love spending 
            time with my family, cooking cuisines from across the world, and traveling.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Amal Alharbi"
            position="PhD student"
            biography={`I received my Bachelor’s degree from KSU in Saudi Arabia, and my Master of Science 
            degree in the neuromuscular field from the University of Pittsburgh, Pennsylvania in 2016. 
            I have worked as a physical therapist with a focus on neurological rehabilitation and as a 
            TA at Qassim University. Currently, I am a doctoral student in the Rehabilitation Science
            Program at UAB, and I joined Dr. Yarar-Fisher’s lab in Fall 2019. My primary research interest 
            is investigating the effects of neuromuscular electrical stimulation on muscle activity and 
            metabolic health after SCI. My future goal is to be an educator and researcher in 
            Neuromuscular Physical Therapy with a focus on Neurological Rehabilitation. In my spare time, 
            I like spending time doing outdoor activities with my kids, hanging out with my friends, 
            cooking new recipes, and swimming.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Miles Grigorian"
            position="UAB Medical Student"
            biography={`I am a second-year medical student here at UAB. I was born and raised in Huntsville, 
            Alabama before I attended UAB as an undergraduate where I majored in biomedical engineering. 
            My interests in Physical Medicine and Rehabilitation began when I was in high school when 
            I sustained an injury to my hamstring in the middle of the soccer season. While I was working 
            through my rehabilitation exercises, my favorite soccer player, at the time, coincidentally 
            ruptured his Achilles tendon in the middle of the season. I later found out that he received 
            stem cell therapy treatment to speed his recovery, and he was playing again 6 months later. 
            His recovery speed, due to the intervention of stem cells, encouraged me to pursue my biomedical 
            engineering degree, but I found that interacting with patients through some of my volunteer 
            work was rewarding as I was able to learn more about each patient’s unique story. 
            This prompted me to pursue medicine in which I want to not only participate in research 
            that improves therapy outcomes, but I also want to directly interact with patients and see the 
            results of these rehabilitation innovations. Outside of medical school, I play soccer in the 
            local adult league, contribute to a soccer podcast, and I find myself going on outdoor 
            adventures around Birmingham. My goal is to be able to hike half of the Appalachian Trail 
            or go to the Grand Canyon before I finish residency. Note: I am taking applications for new 
            hiking or soccer partners.`}
          />
        </Col>
      </Row>
      <h1 className="display-2 text-center mt-2">Alumni</h1>
      <Row xs={1} md={2} className="g-4 transition my-4">
        <Col>
          <CardLayout
            title="Marguerite Marquez"
            position="Student Physical Therapist"
            biography={`I am a second-year Doctorate of Physical Therapy student at the University of 
            Alabama at Birmingham (UAB) in Birmingham, AL. I received my bachelor’s degree in Psychology 
            with minors in Neuroscience and Chemistry from the University of Mississippi (Hotty Toddy!). 
            I am from Gulfport, MS, and I love the water. During my undergraduate career, I conducted 
            research in a behavioral neuroscience lab and wrote and defended a thesis on Feedback Related 
            Neuronal Processing During Motor Learning. This research contributed to a professional 
            interest in neurological physical therapy. Throughout my undergraduate career, I also held 
            multiple leadership positions in large scale community service organizations. This experience 
            allowed me to realize that regardless of the exact nature of my future profession, I would 
            like to work to serve others. Within the healthcare realm, that passion has evolved to working 
            with and for medically underserved or marginalized populations. I currently serving as Clinical 
            Director and Patient/Volunteer Coordinator for Equal Access Birmingham, a free clinic that 
            serves the underinsured population of Birmingham, AL.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Zoe Samira Evans"
            position="Student Intern"
            biography={`I am a native of Bessemer, AL and I attend Lawson State Community College in 
            Birmingham, AL where my major is Biology. Throughout high school, I was involved in many 
            activities including the marching and concert bands, captain of cheerleading team, beta club, 
            FBLA, and Student Government Association. In college, I am a cheerleader, an ambassador, and 
            I am involved in the STEM Program which has allotted the opportunity of receiving an internship 
            through UAB’s Blazing to Biomedical Careers (BBC) program as part of a NIH initiative to lessen 
            disparities. This program provides an entrance into advanced biomedical research careers. The 
            internship led me to join Dr. Yarar’s lab for the summer. I felt her lab would provide guidance 
            into a biomedical career as I hope to become a laboratory personnel or occupational therapist 
            one day. Joining Dr. Yarar-Fisher’s lab has allowed me to explore both laboratory and clinical 
            research to help guide my future options. My hobbies include cheering, shopping, eating, 
            reading, and going to church.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Sarah Taylor"
            position="Visiting Student"
            biography={`I am a pre-med student at Wake Forest University in Winston-Salem, NC majoring in 
            Health and Exercise Science with minors in Chemistry and Bioethics. I am originally from 
            Birmingham, AL, and I graduated from Mountain Brook High School in 2019. My undergraduate 
            courses in Health and Exercise Science have led me to become more interested in the role of 
            nutrition and exercise in health and disease, which is what prompted me to join Dr. 
            Yarar-Fisher’s lab. I love being a part of this lab because I am able to learn more about 
            basic science research techniques, while I am also able to experience the clinical side of 
            research and get a glimpse into the tangible effects this research can have on individuals. 
            Outside of school, I love playing tennis, running, cooking and baking, traveling, and exploring 
            Birmingham’s amazing restaurants with my family and friends!`}
          />
        </Col>
      </Row>
      <ScrollButton />
    </Container>
  );
};

export default People;
