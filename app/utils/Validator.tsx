export const validateStep = (step, formData) => {
  const errors: any = {};

  switch (step) {
    case 0:
      if (!formData.companyName)
        errors.companyName = "Company name is required";
      if (!formData.website) errors.website = "Website is required";
      if (!formData.linkedinProfile)
        errors.linkedinProfile = "LinkedIn Profile is required";
      break;

    case 1:
      if (!formData.description)
        errors.description = "Company description is required";
      if (!formData.industry) errors.industry = "Industry is required";
      if (!formData.location) errors.location = "Location is required";
      if (!formData.language) errors.language = "Language is required";
      if (!formData.timezone) errors.timezone = "Timezone is required";
      break;

    case 2:
      if (!formData.firstName) errors.firstName = "First name is required";
      if (!formData.lastName) errors.lastName = "Last name is required";
      if (!formData.position) errors.position = "Position is required";
      break;

    case 3:
      formData.invites.forEach((invite, index) => {
        if (!invite.inviteEmail) {
          errors[`inviteEmail-${index}`] = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(invite.inviteEmail)) {
          errors[`inviteEmail-${index}`] = "Invalid email format";
        }
        if (!invite.inviteRole) {
          errors[`inviteRole-${index}`] = "Role is required";
        }
      });
      break;

    default:
      break;
  }

  return errors;
};

export const isStepValid = (step, formData) => {
  const errors = validateStep(step, formData);
  return Object.keys(errors).length === 0;
};
