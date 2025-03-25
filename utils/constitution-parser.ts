import type { Chapter, Section } from "@/types/constitution"

export function parseConstitution(text: string): Chapter[] {
  if (!text || typeof text !== "string") {
    console.error("Invalid constitution text provided")
    return getSampleChapters()
  }

  const chapters: Chapter[] = []
  let currentChapter: Chapter | null = null
  let currentSection: Section | null = null

  try {
    // Split the text into lines
    const lines = text.split("\n")

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // Check for chapter headings (both formats: "CHAPTER I" and "Chapter I")
      if ((line.startsWith("CHAPTER") || line.startsWith("Chapter")) && (line.includes(" ") || line.includes("\t"))) {
        const chapterMatch = line.match(/(?:CHAPTER|Chapter)\s+([IVX]+|[0-9]+)/i)
        if (chapterMatch) {
          const chapterNumStr = chapterMatch[1]
          // Handle both Roman numerals and Arabic numbers
          const chapterNum = /^[IVX]+$/i.test(chapterNumStr)
            ? romanToArabic(chapterNumStr)
            : Number.parseInt(chapterNumStr)

          const title = line
          let fullTitle = line

          // Look ahead for chapter title
          let j = i + 1
          while (
            j < lines.length &&
            !lines[j].trim().startsWith("PART") &&
            !lines[j].trim().startsWith("Part") &&
            !lines[j].trim().startsWith("CHAPTER") &&
            !lines[j].trim().startsWith("Chapter") &&
            !lines[j].trim().match(/^\d+\./)
          ) {
            if (lines[j].trim()) {
              fullTitle += " - " + lines[j].trim()
              break
            }
            j++
          }

          currentChapter = {
            id: chapterNum,
            title: `Chapter ${chapterNum}`,
            fullTitle: fullTitle,
            sections: [],
          }
          chapters.push(currentChapter)
        }
      }

      // Check for section headings (format: "1.", "2.", etc.)
      else if (/^\d+\./.test(line) && currentChapter) {
        const sectionMatch = line.match(/^(\d+)\.\s*(.*)/)
        if (sectionMatch) {
          const sectionId = sectionMatch[1]
          const sectionTitle = sectionMatch[2]

          currentSection = {
            id: sectionId,
            number: sectionId,
            title: sectionTitle || "Untitled Section",
            content: "",
          }

          currentChapter.sections.push(currentSection)
        }
      }
      // Check for subsections (format: "(1)", "(2)", etc.)
      else if (/^$$\d+$$/.test(line) && currentChapter) {
        // If we encounter a subsection without a parent section, create a generic section for it
        if (!currentSection) {
          currentSection = {
            id: "0",
            number: "0",
            title: "General Provisions",
            content: "",
          }
          currentChapter.sections.push(currentSection)
        }

        // Add the subsection content
        if (currentSection.content) {
          currentSection.content += "\n" + line
        } else {
          currentSection.content = line
        }
      }
      // Add content to current section
      else if (
        currentSection &&
        line &&
        !line.startsWith("PART") &&
        !line.startsWith("Part") &&
        !line.startsWith("[") &&
        !line.startsWith("CHAPTER") &&
        !line.startsWith("Chapter")
      ) {
        if (currentSection.content) {
          currentSection.content += "\n" + line
        } else {
          currentSection.content = line
        }
      }
    }

    // If no chapters were found, create a fallback chapter with sections
    if (chapters.length === 0) {
      console.warn("No chapters found in constitution text, creating fallback")
      return getSampleChapters() // Return sample data as fallback
    }

    // Clean up empty sections
    chapters.forEach((chapter) => {
      chapter.sections = chapter.sections.filter((section) => section.content.trim() !== "")
    })

    return chapters
  } catch (error) {
    console.error("Error parsing constitution:", error)
    return getSampleChapters() // Return sample data as fallback
  }
}

// Helper function to convert Roman numerals to Arabic numbers
function romanToArabic(roman: string): number {
  const romanNumerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0
  let previous = 0

  for (let i = roman.length - 1; i >= 0; i--) {
    const current = romanNumerals[roman[i].toUpperCase()] || 0
    if (current >= previous) {
      result += current
    } else {
      result -= current
    }
    previous = current
  }

  return result || 1 // Default to 1 if conversion fails
}

// Provide sample data as fallback with actual Nigerian Constitution content
export function getSampleChapters(): Chapter[] {
  return [
    {
      id: 1,
      title: "Chapter 1",
      fullTitle: "Chapter I - General Provisions",
      sections: [
        {
          id: "1",
          number: "1",
          title: "Supremacy of the Constitution",
          content:
            "(1) This Constitution is supreme and its provisions shall have binding force on the authorities and persons throughout the Federal Republic of Nigeria.\n\n" +
            "(2) The Federal Republic of Nigeria shall not be governed, nor shall any persons or group of persons take control of the Government of Nigeria or any part thereof, except in accordance with the provisions of this Constitution.\n\n" +
            "(3) If any other law is inconsistent with the provisions of this Constitution, this Constitution shall prevail, and that other law shall, to the extent of the inconsistency, be void.",
        },
        {
          id: "2",
          number: "2",
          title: "The Federal Republic of Nigeria",
          content:
            "(1) Nigeria is one indivisible and indissoluble sovereign state to be known by the name of the Federal Republic of Nigeria.\n\n" +
            "(2) Nigeria shall be a Federation consisting of States and a Federal Capital Territory.",
        },
        {
          id: "3",
          number: "3",
          title: "States of the Federation and the Federal Capital Territory",
          content:
            "(1) There shall be 36 states in Nigeria, that is to say, Abia, Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Benue, Borno, Cross River, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe and Zamfara.\n\n" +
            "(2) Each state of Nigeria, named in the first column of Part I of the First Schedule to this Constitution, shall consist of the area shown opposite thereto in the second column of that Schedule.\n\n" +
            "(3) The headquarters of the Governor of each State shall be known as the Capital City of that State as shown in the third column of the said Part I of the First Schedule opposite the State named in the first column thereof.\n\n" +
            "(4) The Federal Capital Territory, Abuja, shall be as defined in Part II of the First Scheduled to this Constitution.\n\n" +
            "(5) The provisions of this Constitution in Part I of Chapter VIII hereof shall in relation to the Federal Capital Territory, Abuja, have effect in the manner set out thereunder.\n\n" +
            "(6) There shall be 768 Local Government Areas in Nigeria as shown in the second column of Part I of the First Schedule to this Constitution and six area councils as shown in Part II of that Schedule.",
        },
      ],
    },
    {
      id: 2,
      title: "Chapter 2",
      fullTitle: "Chapter II - Fundamental Objectives and Directive Principles of State Policy",
      sections: [
        {
          id: "13",
          number: "13",
          title: "Fundamental obligations of the Government",
          content:
            "It shall be the duty and responsibility of all organs of government, and of all authorities and persons, exercising legislative, executive or judicial powers, to conform to, observe and apply the provisions of this Chapter of this Constitution.",
        },
        {
          id: "14",
          number: "14",
          title: "The Government and the people",
          content:
            "(1) The Federal Republic of Nigeria shall be a State based on the principles of democracy and social justice.\n\n" +
            "(2) It is hereby, accordingly, declared that:\n" +
            "(a) sovereignty belongs to the people of Nigeria from whom government through this Constitution derives all its powers and authority;\n" +
            "(b) the security and welfare of the people shall be the primary purpose of government; and\n" +
            "(c) the participation by the people in their government shall be ensured in accordance with the provisions of this Constitution.\n\n" +
            "(3) The composition of the Government of the Federation or any of its agencies and the conduct of its affairs shall be carried out in such a manner as to reflect the federal character of Nigeria and the need to promote national unity, and also to command national loyalty, thereby ensuring that there shall be no predominance of persons from a few State or from a few ethnic or other sectional groups in that Government or in any of its agencies.\n\n" +
            "(4) The composition of the Government of a State, a local government council, or any of the agencies of such Government or council, and the conduct of the affairs of the Government or council or such agencies shall be carried out in such manner as to recognise the diversity of the people within its area of authority and the need to promote a sense of belonging and loyalty among all the people of the Federation.",
        },
        {
          id: "15",
          number: "15",
          title: "Political objectives",
          content:
            "(1) The motto of the Federal Republic of Nigeria shall be Unity and Faith, Peace and Progress.\n\n" +
            "(2) Accordingly, national integration shall be actively encouraged, whilst discrimination on the grounds of place of origin, sex, religion, status, ethnic or linguistic association or ties shall be prohibited.\n\n" +
            "(3) For the purpose of promoting national integration, it shall be the duty of the State to:\n" +
            "(a) provide adequate facilities for and encourage free mobility of people, goods and services throughout the Federation;\n" +
            "(b) secure full residence rights for every citizen in all parts of the Federation;\n" +
            "(c) encourage inter-marriage among persons from different places of origin, or of different religious, ethnic or linguistic association or ties; and\n" +
            "(d) promote or encourage the formation of associations that cut across ethnic, linguistic, religious and or other sectional barriers.\n\n" +
            "(4) The State shall foster a feeling of belonging and of involvement among the various people of the Federation, to the end that loyalty to the nation shall override sectional loyalties.\n\n" +
            "(5) The State shall abolish all corrupt practices and abuse of power.",
        },
      ],
    },
    {
      id: 3,
      title: "Chapter 3",
      fullTitle: "Chapter III - Citizenship",
      sections: [
        {
          id: "25",
          number: "25",
          title: "Citizenship by birth",
          content:
            "(1) The following persons are citizens of Nigeria by birth-namely-\n" +
            "(a) every person born in Nigeria before the date of independence, either of whose parents or any of whose grandparents belongs or belonged to a community indigenous to Nigeria;\n" +
            "Provided that a person shall not become a citizen of Nigeria by virtue of this section if neither of his parents nor any of his grandparents was born in Nigeria.\n" +
            "(b) every person born in Nigeria after the date of independence either of whose parents or any of whose grandparents is a citizen of Nigeria; and\n" +
            "(c) every person born outside Nigeria either of whose parents is a citizen of Nigeria.\n\n" +
            '(2) In this section, "the date of independence" means the 1st day of October 1960.',
        },
        {
          id: "26",
          number: "26",
          title: "Citizenship by registration",
          content:
            "(1) Subject to the provisions of section 28 of this Constitution, a person to whom the provisions of this section apply may be registered as a citizen of Nigeria, if the President is satisfied that -\n" +
            "(a) he is a person of good character;\n" +
            "(b) he has shown a clear intention of his desire to be domiciled in Nigeria; and\n" +
            "(c) he has taken the Oath of Allegiance prescribed in the Seventh Schedule to this Constitution.\n\n" +
            "(2) The provisions of this section shall apply to-\n" +
            "(a) any woman who is or has been married to a citizen of Nigeria; or\n" +
            "(b) every person of full age and capacity born outside Nigeria any of whose grandparents is a citizen of Nigeria.",
        },
      ],
    },
    {
      id: 4,
      title: "Chapter 4",
      fullTitle: "Chapter IV - Fundamental Rights",
      sections: [
        {
          id: "33",
          number: "33",
          title: "Right to life",
          content:
            "(1) Every person has a right to life, and no one shall be deprived intentionally of his life, save in execution of the sentence of a court in respect of a criminal offence of which he has been found guilty in Nigeria.\n\n" +
            "(2) A person shall not be regarded as having been deprived of his life in contravention of this section, if he dies as a result of the use, to such extent and in such circumstances as are permitted by law, of such force as is reasonably necessary -\n" +
            "(a) for the defence of any person from unlawful violence or for the defence of property;\n" +
            "(b) in order to effect a lawful arrest or to prevent the escape of a person lawfully detained; or\n" +
            "(c) for the purpose of suppressing a riot, insurrection or mutiny.",
        },
        {
          id: "34",
          number: "34",
          title: "Right to dignity of human person",
          content:
            "(1) Every individual is entitled to respect for the dignity of his person, and accordingly -\n" +
            "(a) no person shall be subject to torture or to inhuman or degrading treatment;\n" +
            "(b) no person shall he held in slavery or servitude; and\n" +
            "(c) no person shall be required to perform forced or compulsory labour.\n\n" +
            '(2) for the purposes of subsection (1) (c) of this section, "forced or compulsory labour" does not include -\n' +
            "(a) any labour required in consequence of the sentence or order of a court;\n" +
            "(b) any labour required of members of the armed forces of the Federation or the Nigeria Police Force in pursuance of their duties as such;\n" +
            "(c) in the case of persons who have conscientious objections to service in the armed forces of the Federation, any labour required instead of such service;\n" +
            "(d) any labour required which is reasonably necessary in the event of any emergency or calamity threatening the life or well-being of the community; or\n" +
            "(e) any labour or service that forms part of -\n" +
            "(i) normal communal or other civic obligations of the well-being of the community,\n" +
            "(ii) such compulsory national service in the armed forces of the Federation as may be prescribed by an Act of the National Assembly, or\n" +
            "(iii) such compulsory national service which forms part of the education and training of citizens of Nigeria as may be prescribed by an Act of the National Assembly.",
        },
      ],
    },
    {
      id: 5,
      title: "Chapter 5",
      fullTitle: "Chapter V - The Legislature",
      sections: [
        {
          id: "47",
          number: "47",
          title: "Establishment of the National Assembly",
          content:
            "There shall be a National Assembly for the Federation which shall consist of a Senate and a House of Representatives.",
        },
        {
          id: "48",
          number: "48",
          title: "Composition of the Senate",
          content:
            "The Senate shall consist of three Senators from each State and one from the Federal Capital Territory, Abuja.",
        },
        {
          id: "49",
          number: "49",
          title: "Composition of the House of Representatives",
          content:
            "Subject to the provisions of this Constitution, the House of Representatives shall consist of three hundred and sixty members representing constituencies of nearly equal population as far as possible, provided that no constituency shall fall within more than one State.",
        },
      ],
    },
    {
      id: 6,
      title: "Chapter 6",
      fullTitle: "Chapter VI - The Executive",
      sections: [
        {
          id: "130",
          number: "130",
          title: "Establishment of the office of President",
          content:
            "(1) There shall be for the Federation a President.\n\n(2) The President shall be the Head of State, the Chief Executive of the Federation and Commander-in-Chief of the Armed Forces of the Federation.",
        },
        {
          id: "131",
          number: "131",
          title: "Qualification for election as President",
          content:
            "A person shall be qualified for election to the office of the President if -\n(a) he is a citizen of Nigeria by birth;\n(b) he has attained the age of forty years;\n(c) he is a member of a political party and is sponsored by that political party; and\n(d) he has been educated up to at least School Certificate level or its equivalent.",
        },
      ],
    },
    {
      id: 7,
      title: "Chapter 7",
      fullTitle: "Chapter VII - The Judicature",
      sections: [
        {
          id: "230",
          number: "230",
          title: "Establishment of the Supreme Court of Nigeria",
          content:
            "(1) There shall be a Supreme Court of Nigeria.\n\n(2) The Supreme Court of Nigeria shall consist of -\n(a) the Chief Justice of Nigeria; and\n(b) such number of Justices of the Supreme Court, not exceeding twenty-one, as may be prescribed by an Act of the National Assembly.",
        },
        {
          id: "231",
          number: "231",
          title: "Appointment of Chief Justice of Nigeria and Justices of the Supreme Court",
          content:
            "(1) The appointment of a person to the office of Chief Justice of Nigeria shall be made by the President on the recommendation of the National Judicial Council subject to confirmation of such appointment by the Senate.\n\n(2) The appointment of a person to the office of a Justice of the Supreme Court shall be made by the President on the National Judicial Council subject to confirmation of such appointment by the senate.",
        },
      ],
    },
    {
      id: 8,
      title: "Chapter 8",
      fullTitle: "Chapter VIII - Federal Capital Territory, Abuja and General Supplementary Provisions",
      sections: [
        {
          id: "297",
          number: "297",
          title: "Federal Capital Territory, Abuja: ownership of lands",
          content:
            "(1) There shall be a Federal Capital Territory, Abuja the boundaries of which are as defined in Part II of the First Schedule to this Constitution.\n\n(2) The ownership of all lands comprised in the Federal Capital Territory, Abuja shall vest in the Government of the Federal Republic of Nigeria.",
        },
        {
          id: "298",
          number: "298",
          title: "The Federal Capital Territory, Abuja",
          content:
            "The Federal Capital Territory, Abuja shall be the Capital of the Federation and seat of the Government of the Federation.",
        },
      ],
    },
  ]
}

