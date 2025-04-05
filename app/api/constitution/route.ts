import { NextResponse } from "next/server";

export interface ConstitutionSection {
  chapter: string;
  section: string;
  content: string[];
}

export const constitution = [
  // Preamble
  {
    chapter: "",
    section: "",
    content: [
      "We the people of the Federal Republic of Nigeria",
      "Having firmly and solemnly resolve, to live in unity and harmony as one indivisible and indissoluble sovereign nation under God, dedicated to the promotion of inter-African solidarity, world peace, international co-operation and understanding",
      "And to provide for a Constitution for the purpose of promoting the good government and welfare of all persons in our country, on the principles of freedom, equality and justice, and for the purpose of consolidating the unity of our people",
      "Do hereby make, enact and give to ourselves the following Constitution:-",
    ],
  },

  // Chapter I - General Provisions
  {
    chapter: "I",
    section: "1",
    content: [
      "This Constitution is supreme and its provisions shall have binding force on the authorities and persons throughout the Federal Republic of Nigeria.",
      "The Federal Republic of Nigeria shall not be governed, nor shall any persons or group of persons take control of the Government of Nigeria or any part thereof, except in accordance with the provisions of this Constitution.",
      "If any other law is inconsistent with the provisions of this Constitution, this Constitution shall prevail, and that other law shall, to the extent of the inconsistency, be void.",
    ],
  },
  {
    chapter: "I",
    section: "2",
    content: [
      "Nigeria is one indivisible and indissoluble sovereign state to be known by the name of the Federal Republic of Nigeria.",
      "Nigeria shall be a Federation consisting of States and a Federal Capital Territory.",
    ],
  },
  {
    chapter: "I",
    section: "3",
    content: [
      "There shall be 36 states in Nigeria, that is to say, Abia, Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Benue, Borno, Cross River, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe and Zamfara.",
      "Each state of Nigeria, named in the first column of Part I of the First Schedule to this Constitution, shall consist of the area shown opposite thereto in the second column of that Schedule.",
      "The headquarters of the Governor of each State shall be known as the Capital City of that State as shown in the third column of the said Part I of the First Schedule opposite the State named in the first column thereof.",
      "The Federal Capital Territory, Abuja, shall be as defined in Part II of the First Scheduled to this Constitution.",
      "The provisions of this Constitution in Part I of Chapter VIII hereof shall in relation to the Federal Capital Territory, Abuja, have effect in the manner set out thereunder.",
    ],
  },

  // Part II - Powers of the Federal Republic of Nigeria
  {
    chapter: "I",
    section: "4",
    content: [
      "The legislative powers of the Federal Republic of Nigeria shall be vested in a National Assembly for the Federation, which shall consist of a Senate and a House of Representatives.",
      "The National Assembly shall have power to make laws for the peace, order and good government of the Federation or any part thereof with respect to any matter included in the Exclusive Legislative List set out in Part I of the Second Schedule to this Constitution.",
      "The power of the National Assembly to make laws for the peace, order and good government of the Federation with respect to any matter included in the Exclusive Legislative List shall, save as otherwise provided in this Constitution, be to the exclusion of the Houses of Assembly of States.",
      "In addition and without prejudice to the powers conferred by subsection (2) of this section, the National Assembly shall have power to make laws with respect to the following matters, that is to say:-",
      "(a) any matter in the Concurrent Legislative List set out in the first column of Part II of the Second Schedule to this Constitution to the extent prescribed in the second column opposite thereto; and",
      "(b) any other matter with respect to which it is empowered to make laws in accordance with the provisions of this Constitution.",
      "If any Law enacted by the House of Assembly of a State is inconsistent with any law validly made by the National Assembly, the law made by the National Assembly shall prevail, and that other Law shall, to the extent of the inconsistency, be void.",
      "The legislative powers of a State of the Federation shall be vested in the House of Assembly of the State.",
      "The House of Assembly of a State shall have power to make laws for the peace, order and good government of the State or any part thereof with respect to the following matters, that is to say:-",
      "(a) any matter not included in the Exclusive Legislative List set out in Part I of the Second Schedule to this Constitution.",
      "(b) any matter included in the Concurrent Legislative List set out in the first column of Part II of the Second Schedule to this Constitution to the extent prescribed in the second column opposite thereto; and",
      "(c) any other matter with respect to which it is empowered to make laws in accordance with the provisions of this Constitution.",
      "Save as otherwise provided by this Constitution, the exercise of legislative powers by the National Assembly or by a House of Assembly shall be subject to the jurisdiction of courts of law and of judicial tribunals established by law, and accordingly, the National Assembly or a House of Assembly shall not enact any law, that ousts or purports to oust the jurisdiction of a court of law or of a judicial tribunal established by law.",
      "Notwithstanding the foregoing provisions of this section, the National Assembly or a House of Assembly shall not, in relation to any criminal offence whatsoever, have power to make any law which shall have retrospective effect.",
    ],
  },
  {
    chapter: "I",
    section: "5",
    content: [
      "Subject to the provisions of this Constitution, the executive powers of the Federation:",
      "(a) shall be vested in the President and may subject as aforesaid and to the provisions of any law made by the National Assembly, be exercised by him either directly or through the Vice-President and Ministers of the Government of the Federation or officers in the public service of the Federation; and",
      "(b) shall extend to the execution and maintenance of this Constitution, all laws made by the National Assembly and to all matters with respect to which the National Assembly has, for the time being, power to make laws.",
      "Subject to the provisions of this Constitution, the executive powers of a State:",
      "(a) shall be vested in the Governor of that State and may, subject as aforesaid and to the provisions of any Law made by a House of Assembly, be exercised by him either directly or through the Deputy Governor and Commissioners of the Government of that State or officers in the public service of the State; and",
      "(b) extend to the execution and maintenance of this Constitution, all laws made by the House of Assembly of the State and to all matters with respect to which the House of Assembly has for the time being power to make laws.",
      "The executive powers vested in a State under subsection (2) of this section shall be so exercised as not to:-",
      "(a) impede or prejudice the exercise of the executive powers of the Federation;",
      "(b) endanger any asset or investment of the Government of the Federation in that State; or",
      "(c) endanger the continuance of a Federal Government in Nigeria.",
      "Notwithstanding the foregoing provisions of this section:-",
      "(a) the President shall not declare a state of war between the Federation and another country except with the sanction of a resolution of both Houses of the National Assembly, sitting in a joint session; and",
      "(b) except with the prior approval of the Senate, no member of the armed forces of the Federation shall be deployed on combat duty outside Nigeria.",
      "Notwithstanding the provisions of subsection (4) of this section, the President, in consultation with the National Defence Council, may deploy members of the armed forces of the Federation on a limited combat duty outside Nigeria if he is satisfied that the national security is under imminent threat or danger:",
      "Provided that the President shall, within seven days of actual combat engagement, seek the consent of the Senate and the Senate shall thereafter give or refuse the said consent within 14 days.",
    ],
  },
  {
    chapter: "I",
    section: "6",
    content: [
      "The judicial powers of the Federation shall be vested in the courts to which this section relates, being courts established for the Federation.",
      "The judicial powers of a State shall be vested in the courts to which this section relates, being courts established, subject as provided by this Constitution, for a State.",
      "The courts to which this section relates, established by this Constitution for the Federation and for the States, specified in subsection (5) (a) to (i) of this section, shall be the only superior courts of record in Nigeria; and save as otherwise prescribed by the National Assembly or by the House of Assembly of a State, each court shall have all the powers of a superior court of record.",
      "Nothing in the foregoing provisions of this section shall be construed as precluding:-",
      "(a) the National Assembly or any House of Assembly from establishing courts, other than those to which this section relates, with subordinate jurisdiction to that of a High Court;",
      "(b) the National Assembly or any House of Assembly, which does not require it, from abolishing any court which it has power to establish or which it has brought into being.",
      "This section relates to:-",
      "(a) the Supreme Court of Nigeria;",
      "(b) the Court of Appeal;",
      "(c) the Federal High Court;",
      "(d) the High Court of the Federal Capital Territory, Abuja;",
      "(e) a High Court of a State",
      "(f) the Sharia Court of Appeal of the Federal Capital Territory, Abuja;",
      "(g) a Sharia Court of Appeal of a State;",
      "(h) the Customary Court of Appeal of the Federal Capital Territory, Abuja;",
      "(i) a Customary Court of Appeal of a State;",
      "(j) such other courts as may be authorised by law to exercise jurisdiction on matters with respect to which the National Assembly may make laws; and",
      "(k) such other court as may be authorised by law to exercise jurisdiction at first instance or on appeal on matters with respect to which a House of Assembly may make laws.",
      "The judicial powers vested in accordance with the foregoing provisions of this section -",
      "(a) shall extend, notwithstanding anything to the contrary in this constitution, to all inherent powers and sanctions of a court of law",
      "(b) shall extend, to all matters between persons, or between government or authority and to any persons in Nigeria, and to all actions and proceedings relating thereto, for the determination of any question as to the civil rights and obligations of that person;",
      "(c) shall not except as otherwise provided by this Constitution, extend to any issue or question as to whether any act of omission by any authority or as to whether any law or any judicial decision is in conformity with the Fundamental Objectives and Directive Principles of State Policy set out in Chapter II of this Constitution;",
      "(d) shall not, as from the date when this section comes into force, extend to any action or proceedings relating to any existing law made on or after 15th January, 1966 for determining any issue or question as to the competence of any authority or person to make any such law.",
    ],
  },
  {
    chapter: "I",
    section: "7",
    content: [
      "The system of local government by democratically elected local government councils is under this Constitution guaranteed; and accordingly, the Government of every State shall, subject to section 8 of this Constitution, ensure their existence under a Law which provides for the establishment, structure, composition, finance and functions of such councils.",
      "The person authorised by law to prescribe the area over which a local government council may exercise authority shall-",
      "(a) define such area as clearly as practicable; and",
      "(b) ensure, to the extent to which it may be reasonably justifiable that in defining such area regard is paid to -",
      "(i) the common interest of the community in the area;",
      "(ii) traditional association of the community; and",
      "(iii) administrative convenience.",
      "It shall be the duty of a local government council within the State to participate in economic planning and development of the area referred to in subsection (2) of this section and to this end an economic planning board shall be established by a Law enacted by the House of Assembly of the State.",
      "The Government of a State shall ensure that every person who is entitled to vote or be voted for at an election to House of Assembly shall have the right to vote or be voted for at an election to a local government council.",
      "The functions to be conferred by Law upon local government council shall include those set out in the Fourth Schedule to this Constitution.",
      "Subject to the provisions of this Constitution -",
      "(a) the National Assembly shall make provisions for statutory allocation of public revenue to local government councils in the Federation; and",
      "(b) the House of Assembly of a State shall make provisions for statutory allocation of public revenue to local government councils within the State.",
      "There shall be 768 Local Government Areas in Nigeria as shown in the second column of Part I of the First Schedule to this Constitution and six area councils as shown in Part II of that Schedule.",
    ],
  },
  {
    chapter: "I",
    section: "8",
    content: [
      "An Act of the National Assembly for the purpose of creating a new State shall only be passed if-",
      "(a) a request, supported by at least two-thirds majority of members (representing the area demanding the creation of the new State) in each of the following, namely -",
      "(i) the Senate and the House of Representatives,",
      "(ii) the House of Assembly in respect of the area, and",
      "(iii) the local government councils in respect of the area,",
      "is received by the National Assembly;",
      "(b) a proposal for the creation of the State is thereafter approved in a referendum by at least two-thirds majority of the people of the area where the demand for creation of the State originated;",
      "(c) the result of the referendum is then approved by a simple majority of all the States of the Federation supported by a simple majority of members of the Houses of Assembly; and",
      "(d) the proposal is approved by a resolution passed by two-thirds majority of members of each House of the National Assembly.",
      "An Act of the National Assembly for the purpose of boundary adjustment of any existing State shall only be passed if-",
      "(a) a request for the boundary adjustment, supported by two-thirds majority of members (representing the area demanding and the area affected by the boundary adjustment) in each of the following, namely-",
      "(i) the Senate and the House of Representatives,",
      "(ii) the House of Assembly in respect of the area, and",
      "(iii) the local government councils in respect of the area.",
      "is received by the National Assembly; and",
      "(b) a proposal for the boundary adjustment is approved by -",
      "(i) a simple majority of members of each House of the National Assembly, and",
      "(ii) a simple majority of members of the House of Assembly in respect of the area concerned.",
    ],
  },
  {
    chapter: "I",
    section: "9",
    content: [
      "The National Assembly may, subject to the provision of this section, alter any of the provisions of this Constitution.",
      "An Act of the National Assembly for the altertion of this Constitution, not being an Act to which section 8 of this Constitution applies, shall not be passed in either House of the National Assembly unless the proposal is supported by the votes of not less than two-thirds majority of all the members of that House and approved by resolution of the Houses of Assembly of not less than two-thirds of all the States.",
      "An Act of the National Assembly for the purpose of altering the provisions of this section, section 8 or Chapter IV of this Constitution shall not be passed by either House of the National Assembly unless the proposal is approved by the votes of not less than four-fifths majority of all the members of each House, and also approved by resolution of the House of Assembly of not less than two-third of all States.",
      "For the purposes of section 8 of this Constitution and of subsections (2) and (3) of this section, the number of members of each House of the National Assembly shall, notwithstanding any vacancy, be deemed to be the number of members specified in sections 48 and 49 of this Constitution.",
    ],
  },
  {
    chapter: "I",
    section: "10",
    content: [
      "The Government of the Federation or of a State shall not adopt any religion as State Religion.",
    ],
  },
  {
    chapter: "I",
    section: "11",
    content: [
      "The National Assembly may make laws for the Federation or any part therefore with respect to the maintenance and securing of public safety and public order and providing, maintaining and securing of such supplies and service as may be designed by the National Assembly as essential supplies and services.",
      "Nothing in this section shall preclude a House of Assembly from making laws with respect to the matter referred to in this section, including the provision for maintenance and securing of such supplies and services as may be designated by the National Assembly as essential supplies and services.",
      "During any period when the Federation is at war the National Assembly may make such laws for the peace, order and good government of the Federation or any part therefore with respect to matters not included in the Exclusive Legislative List as may appear to it to be necessary or expedient for the defence of the Federation.",
    ],
  },
  {
    chapter: "I",
    section: "12",
    content: [
      "No treaty between the Federation and any other country shall have the force of law to the extent to which any such treaty has been enacted into law by the National Assembly.",
      "The National Assembly may make laws for the Federation or any part thereof with respect to matters not included in the Exclusive Legislative List for the purpose of implementing a treaty.",
      "A bill for an Act of the National Assembly passed pursuant to the provisions of subsection (2) of this section shall not be presented to the President for assent, and shall not be enacted unless it is ratified by a majority of all the House of Assembly in the Federation.",
    ],
  },

  // Chapter II - Fundamental Objectives and Directive Principles of State Policy
  {
    chapter: "II",
    section: "13",
    content: [
      "It shall be the duty and responsibility of all organs of government, and of all authorities and persons, exercising legislative, executive or judicial powers, to conform to, observe and apply the provisions of this Chapter of this Constitution.",
    ],
  },
  {
    chapter: "II",
    section: "14",
    content: [
      "The Federal Republic of Nigeria shall be a State based on the principles of democracy and social justice.",
      "It is hereby, accordingly, declared that:",
      "(a) sovereignty belongs to the people of Nigeria from whom government through this Constitution derives all its powers and authority;",
      "(b) the security and welfare of the people shall be the primary purpose of government; and",
      "(c) the participation by the people in their government shall be ensured in accordance with the provisions of this Constitution.",
      "The composition of the Government of the Federation or any of its agencies and the conduct of its affairs shall be carried out in such a manner as to reflect the federal character of Nigeria and the need to promote national unity, and also to command national loyalty, thereby ensuring that there shall be no predominance of persons from a few State or from a few ethnic or other sectional groups in that Government or in any of its agencies.",
      "The composition of the Government of a State, a local government council, or any of the agencies of such Government or council, and the conduct of the affairs of the Government or council or such agencies shall be carried out in such manner as to recognise the diversity of the people within its area of authority and the need to promote a sense of belonging and loyalty among all the people of the Federation.",
    ],
  },
  {
    chapter: "II",
    section: "15",
    content: [
      "The motto of the Federal Republic of Nigeria shall be Unity and Faith, Peace and Progress.",
      "Accordingly, national integration shall be actively encouraged, whilst discrimination on the grounds of place of origin, sex, religion, status, ethnic or linguistic association or ties shall be prohibited.",
      "For the purpose of promoting national integration, it shall be the duty of the State to:",
      "(a) provide adequate facilities for and encourage free mobility of people, goods and services throughout the Federation.",
      "(b) secure full residence rights for every citizen in all parts of the Federation.",
      "(c) encourage inter-marriage among persons from different places of origin, or of different religious, ethnic or linguistic association or ties; and",
      "(d) promote or encourage the formation of associations that cut across ethnic, linguistic, religious and or other sectional barriers.",
      "The State shall foster a feeling of belonging and of involvement among the various people of the Federation, to the end that loyalty to the nation shall override sectional loyalties.",
      "The State shall abolish all corrupt practices and abuse of power.",
    ],
  },
  {
    chapter: "II",
    section: "16",
    content: [
      "The State shall, within the context of the ideals and objectives for which provisions are made in this Constitution.",
      "(a) harness the resources of the nation and promote national prosperity and an efficient, a dynamic and self-reliant economy;",
      "(b) control the national economy in such manner as to secure the maximum welfare, freedom and happiness of every citizen on the basis of social justice and equality of status and opportunity;",
      "(c) without prejudice to its right to operate or participate in areas of the economy, other than the major sectors of the economy, manage and operate the major sectors of the economy;",
      "(d) without prejudice to the right of any person to participate in areas of the economy within the major sector of the economy, protect the right of every citizen to engage in any economic activities outside the major sectors of the economy.",
      "The State shall direct its policy towards ensuring:",
      "(a) the promotion of a planned and balanced economic development;",
      "(b) that the material resources of the nation are harnessed and distributed as best as possible to serve the common good;",
      "(c) that the economic system is not operated in such a manner as to permit the concentration of wealth or the means of production and exchange in the hands of few individuals or of a group; and",
      "(d) that suitable and adequate shelter, suitable and adequate food, reasonable national minimum living wage, old age care and pensions, and unemployment, sick benefits and welfare of the disabled are provided for all citizens.",
    ],
  },
  {
    chapter: "II",
    section: "17",
    content: [
      "The State social order is founded on ideals of Freedom, Equality and Justice.",
      "In furtherance of the social order-",
      "(a) every citizen shall have equality of rights, obligations and opportunities before the law;",
      "(b) the sanctity of the human person shall be recognised and human dignity shall be maintained and enhanced;",
      "(c) governmental actions shall be humane;",
      "(d) exploitation of human or natural resources in any form whatsoever for reasons, other than the good of the community, shall be prevented; and",
      "(e) the independence, impartiality and integrity of courts of law, and easy accessibility thereto shall be secured and maintained.",
      "The State shall direct its policy towards ensuring that-",
      "(a) all citizens, without discrimination on any group whatsoever, have the opportunity for securing adequate means of livelihood as well as adequate opportunity to secure suitable employment;",
      "(b) conditions of work are just and humane, and that there are adequate facilities for leisure and for social, religious and cultural life;",
      "(c) the health, safety and welfare of all persons in employment are safeguarded and not endangered or abused;",
      "(d) there are adequate medical and health facilities for all persons;",
      "(e) there is equal pay for equal work without discrimination on account of sex, or on any other ground whatsoever;",
      "(f) children, young persons and the aged are protected against any exploitation whatsoever, and against moral and material neglect;",
      "(g) provision is made for public assistance in deserving cases or other conditions of need; and",
      "(h) the evolution and promotion of family life is encouraged.",
    ],
  },
  {
    chapter: "II",
    section: "18",
    content: [
      "Government shall direct its policy towards ensuring that there are equal and adequate educational opportunities at all levels.",
      "Government shall promote science and technology",
      "Government shall strive to eradicate illiteracy; and to this end Government shall as and when practicable provide",
      "(a) free, compulsory and universal primary education;",
      "(b) free secondary education;",
      "(c) free university education; and",
      "(d) free adult literacy programme.",
    ],
  },
  {
    chapter: "II",
    section: "19",
    content: [
      "The foreign policy objectives shall be -",
      "(a) promotion and protection of the national interest;",
      "(b) promotion of African integration and support for African unity;",
      "(c) promotion of international co-operation for the consolidation of universal peace and mutual respect among all nations and elimination of discrimination in all its manifestations;",
      "(d) respect for international law and treaty obligations as well as the seeking of settlement of international disputes by negotiation, mediation, conciliation, arbitration and adjudication; and",
      "(e) promotion of a just world economic order.",
    ],
  },
  {
    chapter: "II",
    section: "20",
    content: [
      "The State shall protect and improve the environment and safeguard the water, air and land, forest and wild life of Nigeria.",
    ],
  },
  {
    chapter: "II",
    section: "21",
    content: [
      "The State shall -",
      "(a) protect, preserve and promote the Nigerian cultures which enhance human dignity and are consistent with the fundamental objectives as provided in this Chapter; and",
      "(b) encourage development of technological and scientific studies which enhance cultural values.",
    ],
  },
  {
    chapter: "II",
    section: "22",
    content: [
      "The press, radio, television and other agencies of the mass media shall at all times be free to uphold the fundamental objectives contained in this Chapter and uphold the responsibility and accountability of the Government to the people.",
    ],
  },
  {
    chapter: "II",
    section: "23",
    content: [
      "The national ethics shall be Discipline, Integrity, Dignity of Labour, Social Justice, Religious Tolerance, Self-reliance and Patriotism.",
    ],
  },
  {
    chapter: "II",
    section: "24",
    content: [
      "It shall be the duty of every citizen to -",
      "(a) abide by this Constitution, respect its ideals and its institutions, the National Flag, the National Anthem, the National Pledge, and legitimate authorities;",
      "(b) help to enhance the power, prestige and good name of Nigeria, defend Nigeria and render such national service as may be required;",
      "(c) respect the dignity of other citizens and the rights and legitimate interests of others and live in unity and harmony and in the spirit of common brotherhood;",
      "(d) make positive and useful contribution to the advancement, progress and well-being of the community where he resides;",
      "(e) render assistance to appropriate and lawful agencies in the maintenance of law and order; and",
      "(f) declare his income honestly to appropriate and lawful agencies and pay his tax promptly.",
    ],
  },

  // Chapter III - Citizenship
  {
    chapter: "III",
    section: "25",
    content: [
      "The following persons are citizens of Nigeria by birth-namely-",
      "(a) every person born in Nigeria before the date of independence, either of whose parents or any of whose grandparents belongs or belonged to a community indigenous to Nigeria;",
      "Provided that a person shall not become a citizen of Nigeria by virtue of this section if neither of his parents nor any of his grandparents was born in Nigeria.",
      "(b) every person born in Nigeria after the date of independence either of whose parents or any of whose grandparents is a citizen of Nigeria; and",
      "(c) every person born outside Nigeria either of whose parents is a citizen of Nigeria.",
      'In this section, "the date of independence" means the 1st day of October 1960.',
    ],
  },

  // Continue with all remaining sections...
  // I'll add more sections to complete the entire constitution

  // Chapter IV - Fundamental Rights
  {
    chapter: "IV",
    section: "33",
    content: [
      "Every person has a right to life, and no one shall be deprived intentionally of his life, save in execution of the sentence of a court in respect of a criminal offence of which he has been found guilty in Nigeria.",
    ],
  },

  {
    chapter: "IV",
    section: "34",
    content: [
      "Every individual is entitled to respect for the dignity of his person, and accordingly -",
      "(a) no person shall be subject to torture or to inhuman or degrading treatment;",
      "(b) no person shall be held in slavery or servitude; and",
      "(c) no person shall be required to perform forced of compulsory labour.",
    ],
  },

  {
    chapter: "IV",
    section: "35",
    content: [
      "Every person shall be entitled to his personal liberty and no person shall be deprived of such liberty save in the following cases and in accordance with a procedure permitted by law -",
      "(a) in execution of the sentence or order of a court in respect of a criminal offence of which he has been found guilty;",
      "(b) by reason of his failure to comply with the order of a court or in order to secure the fulfilment of any obligation imposed upon him by law;",
      "(c) for the purpose of bringing him before a court in execution of the order of a court or upon reasonable suspicion of his having committed a criminal offence, or to such extent as may be reasonably necessary to prevent his committing a criminal offence;",
      "(d) in the case of a person who has not attained the age of eighteen years for the purpose of his education or welfare;",
      "(e) in the case of persons suffering from infectious or contagious disease, persons of unsound mind, persons addicted to drugs or alcohol or vagrants, for the purpose of their care or treatment or the protection of the community; or",
      "(f) for the purpose of preventing the unlawful entry of any person into Nigeria or of effecting the expulsion, extradition or other lawful removal from Nigeria of any person or the taking of proceedings relating thereto.",
    ],
  },

  // The Legislature
  {
    chapter: "V",
    section: "47",
    content: [
      "There shall be a National Assembly for the Federation which shall consist of a Senate and a House of Representatives.",
    ],
  },

  {
    chapter: "V",
    section: "48",
    content: [
      "The Senate shall consist of three Senators from each State and one from the Federal Capital Territory, Abuja.",
    ],
  },

  {
    chapter: "V",
    section: "49",
    content: [
      "Subject to the provisions of this Constitution, the House of Representatives shall consist of three hundred and sixty members representing constituencies of nearly equal population as far as possible, provided that no constituency shall fall within more than one State.",
    ],
  },

  // The Executive
  {
    chapter: "VI",
    section: "130",
    content: [
      "There shall be for the Federation a President.",
      "The President shall be the Head of State, the Chief Executive of the Federation and Commander-in-Chief of the Armed Forces of the Federation.",
    ],
  },

  {
    chapter: "VI",
    section: "131",
    content: [
      "A person shall be qualified for election to the office of the President if -",
      "(a) he is a citizen of Nigeria by birth;",
      "(b) he has attained the age of forty years;",
      "(c) he is a member of a political party and is sponsored by that political party; and",
      "(d) he has been educated up to at least School Certificate level or its equivalent.",
    ],
  },

  // The Judicature
  {
    chapter: "VII",
    section: "230",
    content: [
      "There shall be a Supreme Court of Nigeria.",
      "The Supreme Court of Nigeria shall consist of -",
      "(a) the Chief Justice of Nigeria; and",
      "(b) such number of Justices of the Supreme Court, not exceeding twenty-one, as may be prescribed by an Act of the National Assembly.",
    ],
  },

  {
    chapter: "VII",
    section: "231",
    content: [
      "The appointment of a person to the office of Chief Justice of Nigeria shall be made by the President on the recommendation of the National Judicial Council subject to confirmation of such appointment by the Senate.",
      "The appointment of a person to the office of a Justice of the Supreme Court shall be made by the President on the National Judicial Council subject to confirmation of such appointment by the senate.",
      "A person shall not be qualified to hold the office of Chief Justice of Nigeria or a Justice of the Supreme Court, unless he is qualified to practice as a legal practitioner in Nigeria and has been so qualified for  unless he is qualified to practice as a legal practitioner in Nigeria and has been so qualified for a period of not less than fifteen years.",
      "If the office of Chief Justice of Nigeria is vacant or if the person holding the office is for any reason unable to perform the functions of the office, then until a person has been appointed to and has assumed the functions of that office, or until the person holding has resumed those functions, the President shall appoint the most senior Justice of the Supreme Court to perform those functions.",
      "Except on the recommendation of the National Judicial Council, an appointment pursuant to the provisions of subsection (4) of this section shall cease to have effect after the expiration of three months from the date of such appointment, and the President shall not re-appointment a person whose appointment has lapsed.",
    ],
  },

  // Federal Capital Territory, Abuja and General Supplementary Provisions
  {
    chapter: "VIII",
    section: "297",
    content: [
      "There shall be a Federal Capital Territory, Abuja the boundaries of which are as defined in Part II of the First Schedule to this Constitution.",
      "The ownership of all lands comprised in the Federal Capital Territory, Abuja shall vest in the Government of the Federal Republic of Nigeria.",
    ],
  },

  {
    chapter: "VIII",
    section: "298",
    content: [
      "The Federal Capital Territory, Abuja shall be the Capital of the Federation and seat of the Government of the Federation.",
    ],
  },

  {
    chapter: "VIII",
    section: "299",
    content: [
      "The provisions of this Constitution shall apply to the Federal Capital Territory, Abuja as if it were one of the States of the Federation; and accordingly -",
      "(a) all the legislative powers, the executive powers and the judicial powers vested in the House of Assembly, the Governor of a State and in the courts of a State shall, respectively, vest in the National Assembly, the President of the Federation and in the courts which by virtue of the foregoing provisions are courts established for the Federal Capital Territory, Abuja;",
      "(b) all the powers referred to in paragraph (a) of this section shall be exercised in accordance with the provisions of this Constitution; and",
      "(c) the provisions of this Constitution pertaining to the matters aforesaid shall be read with such modifications and adaptations as may be reasonably necessary to bring them into conformity with the provisions of this section.",
    ],
  },

  // Interpretation, Citation and Commencement
  {
    chapter: "VIII",
    section: "318",
    content: [
      "In this constitution, unless it is otherwise expressly provided or the context otherwise requires-",
      '"Act" or "Act of the National Assembly" means any law made by the National Assembly and includes any law which takes effect under the provisions of this constitution as an Act of the National Assembly;',
      '"appointment" or its cognate expression includes appointment on promotion and transfer or confirmation of appointment;',
      '"area council" means each of the administrative areas within the Federal Capital Territory, Abuja;',
      '"authority" includes government;',
    ],
  },

  {
    chapter: "VIII",
    section: "319",
    content: [
      "This Constitution may be cited as the Constitution of the Federal Republic of Nigeria 1999.",
    ],
  },

  {
    chapter: "VIII",
    section: "320",
    content: [
      "The provision of this Constitution shall come into force on 29th day of May 1999.",
    ],
  },
];

export async function GET() {
  return NextResponse.json(constitution);
}
