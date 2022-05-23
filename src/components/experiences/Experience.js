import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import FadeInSection from "../shared/FadeInSection";

const experiencesList = [
  {
    companyName: "Spotwork",
    role: "Full Stack Developer Intern",
    timePeriod: "May 2022 - August 2022",
    techStack: ["React.js", "Redux", "Material UI", "Formik", "Firebase"],
  },
  {
    companyName: "Jin Kuai Zi",
    role: "Full Stack Developer Freelancer",
    timePeriod: "June 2021 - August 2021",
    techStack: ["Django", "jQuery", "Sass", "MySQL"],
  },
  {
    companyName: "Code Ninjas",
    role: "Lead Coding Instructor",
    timePeriod: "June 2020 - August 2020",
  },
];

class Experiences {
  constructor(experiences) {
    this.experiences = experiences;
  }

  isNotFirstItem(index) {
    return index !== 0;
  }

  isNotLastItem(index) {
    return index !== this.experiences.length - 1;
  }
}

const Experience = () => {
  const experiences = new Experiences(experiencesList);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      bgcolor="primary.main"
    >
      <Typography variant="h1">experiences</Typography>
      <Box p={1}>
        {experiences.experiences.map((experience, index) => {
          return (
            <Box display="flex" flexDirection="row" key={uuidv4()}>
              <Box display="flex" flexDirection="column" width="20px">
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={experiences.isNotFirstItem(index) && "tertiary.main"}
                  mb={experiences.isNotFirstItem(index) && 2}
                  borderRadius="0px 0px 5px 5px "
                />
                <Box
                  height="10px"
                  width="10px"
                  borderRadius="100%"
                  bgcolor="secondary.main"
                />
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={experiences.isNotLastItem(index) && "tertiary.main"}
                  mt={experiences.isNotLastItem(index) && 2}
                  borderRadius="5px 5px 0px 0px"
                />
              </Box>
              <FadeInSection>
                <Box py={5} pl={3}>
                  <Typography variant="h4" color="secondary.main">
                    {experience.companyName}
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>
                  {experience.techStack && (
                    <Box>
                      {experience.techStack.map((technology, index) => (
                        <React.Fragment key={uuidv4()}>
                          {index !== 0 && (
                            <Typography display="inline">, </Typography>
                          )}
                          <Typography display="inline">{technology}</Typography>
                        </React.Fragment>
                      ))}
                    </Box>
                  )}
                  <Typography>{experience.timePeriod}</Typography>
                </Box>
              </FadeInSection>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
