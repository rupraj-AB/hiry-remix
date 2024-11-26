import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import EnvelopIcon from "~/assets/icons/EnvelopIcon";
import PlusIcon from "~/assets/icons/PlusIcon";
import TrashIcon from "~/assets/icons/TrashIcon";
import Button from "~/components/Button";
import Dropdown from "~/components/Dropdown";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";
import useWindowSize from "~/hooks/useWindowSize";

const Step4 = ({ formData, onInputChange, handleContinue, errors }) => {
  const [invites, setInvites] = useState<any[]>([
    { inviteEmail: "", inviteRole: "" },
  ]);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleInviteChange = (index, name, value) => {
    const updatedInvites = [...invites];
    updatedInvites[index] = {
      ...updatedInvites[index],
      [name]: value,
    };
    setInvites(updatedInvites);

    onInputChange({
      target: {
        name: "invites",
        value: updatedInvites,
      },
    });
  };

  const addInviteRow = () => {
    setInvites([...invites, { inviteEmail: "", inviteRole: "" }]);
  };

  const removeInviteRow = (indexToRemove) => {
    const updatedInvites = invites.filter(
      (_, index) => index !== indexToRemove
    );
    setInvites(updatedInvites);

    onInputChange({
      target: {
        name: "invites",
        value: updatedInvites,
      },
    });
  };

  const handleChange = (name, value) => {
    onInputChange({ target: { name, value } });
  };

  return (
    <>
      {isMobile ? (
        <div>
          <div className="relative flex flex-col gap-4 mt-10">
            <TextArea
              label="Add Emails"
              value={formData.inviteEmails}
              onChange={(value) => handleChange("inviteEmails", value)}
              placeholder="example1@email.com, example2@email.com, ..."
              maxCharacters={100}
            />

            <Dropdown
              label="Access level"
              value={formData.accessLevel.value}
              onChange={(value) => handleChange("accessLevel", value)}
              placeholder="Select"
              name={`accessLevel`}
              options={[
                { value: "admin", label: "Admin" },
                { value: "member", label: "Member" },
              ]}
            />
          </div>
        </div>
      ) : (
        <div className="mt-10">
          {invites.map((invite, index) => (
            <div key={index} className="flex items-center gap-2 mb-3 relative">
              <div className="w-3/5">
                <Input
                  type="email"
                  label=""
                  icon={<EnvelopIcon />}
                  error={errors[`inviteEmail-${index}`]}
                  name={`inviteEmail-${index}`}
                  value={invite.inviteEmail}
                  onChange={(e) =>
                    handleInviteChange(index, "inviteEmail", e.target.value)
                  }
                  placeholder="jhon@gmail.com"
                />
              </div>
              <div className="w-2/5">
                <Dropdown
                  value={invite.inviteRole.value}
                  onChange={(value) =>
                    handleInviteChange(index, "inviteRole", value)
                  }
                  error={errors[`inviteRole-${index}`]}
                  placeholder="Select role"
                  name={`inviteRole-${index}`}
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "member", label: "Member" },
                  ]}
                />
              </div>
              {index > 0 && (
                <div
                  onClick={() => removeInviteRow(index)}
                  className="absolute -right-8 cursor-pointer"
                >
                  <TrashIcon />
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 flex gap-2">
            <Button
              iconPosition="left"
              icon={<PlusIcon />}
              variant="secondary"
              onClick={addInviteRow}
            >
              Add Invite
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Step4;
