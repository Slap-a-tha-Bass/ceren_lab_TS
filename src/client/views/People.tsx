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
            imgClassname="ceren-headshot"
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
            imgClassname="erika-headshot"
            position="Laboratory Manager"
            biography={`I grew up in Cleveland, MS (home of the Fighting Okra, yes look it up). 
            I attended Mississippi State University for my undergraduate degree in Biological Sciences and 
            Mississippi College for my master???s degree in Biomedical Sciences. I have worked for the University 
            of Mississippi Medical Center (UMMC) as a researcher for 7 years studying adolescent pediatric 
            scoliosis in the pediatric population before returning to Mississippi State University for my 
            doctorate degree in molecular biology and biochemistry. I worked for the USDA-ARS as a post-doctoral f
            ellow for 3 years as a geneticist prior to joining Dr. Yarar-Fisher???s team where I am the laboratory 
            manager and a researcher. Dr. Yarar-Fisher???s program investigating spinal cord injury compliments some 
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
            imgClassname="jia-headshot"
            position="Post-Doctoral Fellow"
            biography={`I am a 4th year post-doctoral scholar at Rehabilitation Medicine Laboratory. I am from China, 
            and I earned my master???s degree in Molecular Genetics from the University of Cincinnati and my PhD 
            degree in Nutrition Sciences from Purdue University. During my PhD training, I was involved with 
            clinical trials investigating several aspects of dietary components on metabolic health outcomes. I 
            greatly appreciated the applicability of human clinical nutrition research. In the meanwhile, I became 
            interested in exploring the underlying mechanisms for the development of cardio-metabolic diseases. I 
            joined Dr. Yarar-Fisher???s lab in 2017 to further expand my training in nutrition research and gain 
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
            imgClassname="amal-headshot"
            position="PhD student"
            biography={`I received my Bachelor???s degree from KSU in Saudi Arabia, and my Master of Science 
            degree in the neuromuscular field from the University of Pittsburgh, Pennsylvania in 2016. 
            I have worked as a physical therapist with a focus on neurological rehabilitation and as a 
            TA at Qassim University. Currently, I am a doctoral student in the Rehabilitation Science
            Program at UAB, and I joined Dr. Yarar-Fisher???s lab in Fall 2019. My primary research interest 
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
            imgClassname="miles-headshot"
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
            work was rewarding as I was able to learn more about each patient???s unique story. 
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
            Alabama at Birmingham (UAB) in Birmingham, AL. I received my bachelor???s degree in Psychology 
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
            imgClassname="zoe-headshot"
            position="Student Intern"
            biography={`I am a native of Bessemer, AL and I attend Lawson State Community College in 
            Birmingham, AL where my major is Biology. Throughout high school, I was involved in many 
            activities including the marching and concert bands, captain of cheerleading team, beta club, 
            FBLA, and Student Government Association. In college, I am a cheerleader, an ambassador, and 
            I am involved in the STEM Program which has allotted the opportunity of receiving an internship 
            through UAB???s Blazing to Biomedical Careers (BBC) program as part of a NIH initiative to lessen 
            disparities. This program provides an entrance into advanced biomedical research careers. The 
            internship led me to join Dr. Yarar???s lab for the summer. I felt her lab would provide guidance 
            into a biomedical career as I hope to become a laboratory personnel or occupational therapist 
            one day. Joining Dr. Yarar-Fisher???s lab has allowed me to explore both laboratory and clinical 
            research to help guide my future options. My hobbies include cheering, shopping, eating, 
            reading, and going to church.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Sarah Taylor"
            imgClassname="sarah-headshot"
            position="Visiting Student"
            biography={`I am a pre-med student at Wake Forest University in Winston-Salem, NC majoring in 
            Health and Exercise Science with minors in Chemistry and Bioethics. I am originally from 
            Birmingham, AL, and I graduated from Mountain Brook High School in 2019. My undergraduate 
            courses in Health and Exercise Science have led me to become more interested in the role of 
            nutrition and exercise in health and disease, which is what prompted me to join Dr. 
            Yarar-Fisher???s lab. I love being a part of this lab because I am able to learn more about 
            basic science research techniques, while I am also able to experience the clinical side of 
            research and get a glimpse into the tangible effects this research can have on individuals. 
            Outside of school, I love playing tennis, running, cooking and baking, traveling, and exploring 
            Birmingham???s amazing restaurants with my family and friends!`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Mualla Eraslan"
            imgClassname="mualla-headshot"
            position="Labratory Manager"
            biography={`I received my first B.S. degree in chemistry education from Hacettepe University 
            in Turkey. Following my undergraduate education I worked as a Histo-technologist at Boston 
            University Medical Center???s Anatomic Pathology Lab for 12 years. Specifically, I worked in 
            immunohistochemistry, histology, cytology, and molecular diagnostic laboratories. While 
            working as a Histo-technologist I earned my second B.S. degree in Biomedical Sciences and 
            Clinical Laboratories from Boston University. I moved to Birmingham in August 2014 to get my 
            Master???s Degree in Biotechnology at UAB, which I received in August 2015. Following my 
            Master???s Degree I joined Dr. Yarar-Fisher???s laboratory as a laboratory manager. My current 
            projects investigate the effects of long-term neuromuscular electrical stimulation and high 
            protein diet on metabolic and hypertrophic signaling in the paralyzed muscle.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Hatice Cetin"
            imgClassname="hatice-headshot"
            position="Erasmus Research Scholar"
            biography={`I received my B.S degree in Physical Therapy and Rehabilitation from Hacettepe 
            University in Turkey. Following graduation, I started working as a research assistant at 
            Hacettepe University in 2013. I completed my Master???s degree in June, 2016. The focus of my 
            thesis was investigating the effect of exercise after radiofrequency denervation in patients 
            with facet joint syndromme. I am still working at the same university as a research assistant 
            while pursuing a PhD in Rehabilitation Science. My research focus is on spinal cord and 
            traumatic brain injury rehabilitation. I joined Dr. Ceren Yarar-Fisher???s lab in September, 
            2017, and I???m currently studying the effects of neuromuscular electrical stimulation on 
            muscle metabolism in individuals with sub-acute spinal cord injury.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Baris Cetin"
            imgClassname="baris-headshot"
            position="Erasmus Research Scholar"
            biography={`I earned my B.S. degree in Physical Therapy and Rehabilitation from Hacettepe 
            University in 2013. After graduation I started working at the same university as a 
            research assistant at the neurological rehabilitation unit. I earned my MSc degree in 
            2016 in the field of neurological rehabilitation. My research focus was studying the 
            effect of spinal stabilization exercises on walking and balance in patients with Multiple 
            Sclerosis. I have continued my studies at Hacettepe University and started my doctoral 
            training in the field of neurological rehabilitation. I am currently studying at Dr. Ceren 
            Yarar-Fisher???s Lab and investigating the effect of neuromuscular electrical stimualtion on
            muscle metabolism in individuals with sub-acute spinal cord injury.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Perry W. Griffin II"
            imgClassname="perry-headshot"
            position="Summer Medical Student"
            biography={`As a medical student just completing their first year, I chose to pursue 
            research over the 2017 summer to increase the breadth of my research experience to 
            include working with patients in a clinical setting and pursuing answers to questions 
            that may later impact patient care and recovery. I was born and raised in Birmingham, 
            Alabama and graduated with a B.S. in Kinesiology from The University of Alabama at 
            Birmingham. My college career began nontraditionally at the age of 27 after working as a 
            personal fitness trainer. I felt led to pursue higher education as I realized my passions 
            were with caring for and educating others in areas of health and well-being. Ultimately, 
            I felt the call of medicine and began attending The University of Alabama School of 
            Medicine in late 2016. My first research experience was during my undergraduate career 
            under Dr. Gordon Fisher, where I performed immunohistochemistry to determine muscle 
            fiber type ratios in participants before and after interventional exercise programs and 
            performed cross-sectional analysis comparing vital measurements such as blood pressure, 
            arterial elasticity, and insulin sensitivity. I became much more familiar with principles 
            and pathways for which I was already passionate, while also being able to see how these 
            phenotypic differences may affect health outcomes and risk in certain patient populations. 
            My limited experiences have led me to believe that a career in physical medicine and 
            rehabilitation would be exceptionally rewarding and I was fortunate enough to be selected to 
            receive the Summer Research Fellowship Award from the Diabetes Research Center. This 
            opportunity involves conducting research under the guidance of Dr. Yarar-Fisher, as it 
            relates to patients with spinal cord injuries and the examination of novel nutritional 
            modalities and their effects on protection and recovery from damage, as well as brown 
            adipose tissue distribution, functionality, and activity. Personally observing how 
            dramatically a patient???s mobility can be altered by a single event and then being able to 
            explore questions and seek answers that may lead to improvements in such patients??? 
            quality of life is a reward without parallel.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Adarsh Kulkani"
            imgClassname="adarsh-headshot"
            position="Summer Medical Student"
            biography={`I am a medical student about to start my second year here at the University of 
            Alabama School of Medicine (UASOM). Born and brought up in Birmingham, I headed to 
            Nashville, Tennessee for a change in scenery to attend Vanderbilt University for my 
            undergraduate studies, earning a degree in Molecular and Cellular Biology. After 
            gaining some perspective on basic science research during my time in college, I was 
            curious to expand my horizons in the realm of research and try clinical or translational 
            research. As a medical student, I wanted to enter an area of research that greatly 
            interests me as well as an area that I could possibly see myself pursuing as a career. 
            Taking neuroscience courses as an undergraduate gave me immense enthusiasm for medicine 
            involving the nervous system and played a significant role in my decision to join Dr. 
            Yarar-Fisher???s lab. Through the Department of Physical Medicine and Rehabilitation Functional 
            Neurorehabilitation Research Program, I received the FNR Scholarship award to do research this 
            summer. My research will be investigating the effectiveness of a ketogenic diet in 
            facilitating neuro-recovery following spinal cord injury (SCI). We believe processes that 
            typically occur after SCI, such as glutamate excitotoxity, inflammation, and induction of 
            apoptotic pathways, will be inhibited by ketone bodies resulting from a ketogenic diet. Our 
            hypothesis is that 8 weeks of a ketogenic diet, as compared to a standard diet, immediately 
            following SCI significantly improves motor and sensory function as well as functional 
            independence in patients with complete SCI.`}
          />
        </Col>
        <Col>
          <CardLayout
            title="Christian Behren"
            imgClassname="christian-headshot"
            position="Rotation Student"
            biography={`I am a graduate student in the Department of Nutrition Science rotating in 
            Dr. Yarar-Fisher???s lab. I grew up in Miami, Florida, and attended Appalachian State 
            University in Boone, NC earning my B.S. in Nutrition and Foods, and Exercise Science as 
            well as my M.S. in Dietetics. I am incredibly excited and appreciative for the 
            opportunity to work in Dr. Yarar-Fisher???s lab. Rehabilitation Medicine is an area of 
            research that has always interested me, but I have previously not had the opportunity 
            to be exposed to. As a lifelong competitive athlete, I am interested in examining the 
            differences both small and large between injured and trained muscle. Along with 
            differences in how injured vs. trained muscle responds to nutrition. Gaining a better 
            understanding of these intricate differences could lead to novel and improved nutrition and 
            exercise intervention strategies for those with injury. Outside of school, my interests 
            include running, hiking, cycling, cooking, traveling and hanging out with my French 
            Bulldog, Django.`}
          />
        </Col>
      </Row>
      <ScrollButton />
    </Container>
  );
};

export default People;
