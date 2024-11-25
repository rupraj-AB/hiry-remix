import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PlusIcon from "~/assets/icons/PlusIcon";
import TrashIcon from "~/assets/icons/TrashIcon";
import Button from "~/components/Button";
import Dropdown from "~/components/Dropdown";
import Input from "~/components/Input";

const Step4 = ({ formData, onInputChange, handleContinue }) => {
  // State to manage multiple invites
  const [invites, setInvites] = useState<any[]>([
    { inviteEmail: "", inviteRole: "" },
  ]);

  // Handle change for a specific invite index
  const handleInviteChange = (index, name, value) => {
    const updatedInvites = [...invites];
    updatedInvites[index] = {
      ...updatedInvites[index],
      [name]: value,
    };
    setInvites(updatedInvites);

    // Update parent form data with all invites
    onInputChange({
      target: {
        name: "invites",
        value: updatedInvites,
      },
    });
  };

  // Add new invite row
  const addInviteRow = () => {
    setInvites([...invites, { inviteEmail: "", inviteRole: "" }]);
  };

  // Remove a specific invite row
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

  return (
    <div className="mt-10">
      {invites.map((invite, index) => (
        <div key={index} className="flex items-center gap-2 mb-3 relative">
          <div className="flex-1">
            <Input
              type="email"
              label=""
            
              name={`inviteEmail-${index}`}
              value={invite.inviteEmail}
              onChange={(e) =>
                handleInviteChange(index, "inviteEmail", e.target.value)
              }
              placeholder="example@email.com"
            />
          </div>
          <div className="flex-1"> 
            <Dropdown
              value={invite.inviteRole.value}
              onChange={(value) =>
                handleInviteChange(index, "inviteRole", value)
              }
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
  );
};

export default Step4;
