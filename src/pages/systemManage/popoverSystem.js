import { useTranslation } from "react-i18next";
import i18n from "languages";
import { ListItemButton, ListItemText, Popover } from "@mui/material";

export const PopoverLanguages = ({ openAnchorEl, setOpenAnchorEl }) => {
  const { t } = useTranslation();
  const open = Boolean(openAnchorEl);

  const onClickLanguages = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem("languages", lng);
    setOpenAnchorEl(null);
  };

  return (
    <Popover
      open={open}
      anchorEl={openAnchorEl}
      onClose={() => setOpenAnchorEl(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ListItemButton onClick={() => onClickLanguages("vi")}>
        <ListItemText primary={t("languagesVi")} />
      </ListItemButton>
      <ListItemButton onClick={() => onClickLanguages("en")}>
        <ListItemText primary={t("languagesEn")} />
      </ListItemButton>
    </Popover>
  );
};

export const PopoverUser = ({ openAnchorElUser, setOpenAnchorElUser }) => {
  const openUser = Boolean(openAnchorElUser);

  return (
    <Popover
      open={openUser}
      anchorEl={openAnchorElUser}
      onClose={() => setOpenAnchorElUser(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ListItemButton>
        <ListItemText primary="CRUD redux" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="quản lý bác sĩ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="quản lý admin" />
      </ListItemButton>
    </Popover>
  );
};

export const PopoverClinic = ({ openAnchorElClinic, setOpenAnchorElClinic }) => {
  const openClinic = Boolean(openAnchorElClinic);

  return (
    <Popover
      open={openClinic}
      anchorEl={openAnchorElClinic}
      onClose={() => setOpenAnchorElClinic(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ListItemButton>
        <ListItemText primary="Quản lý phòng khám" />
      </ListItemButton>
    </Popover>
  );
};

export const PopoverSpecialist = ({ openAnchorElSpecialist, setopenAnchorElSpecialist }) => {
  const openSpecialist = Boolean(openAnchorElSpecialist);

  return (
    <Popover
      open={openSpecialist}
      anchorEl={openAnchorElSpecialist}
      onClose={() => setopenAnchorElSpecialist(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ListItemButton>
        <ListItemText primary="Quản lý chuyên khoa" />
      </ListItemButton>
    </Popover>
  );
};

export const PopoverHandbook = ({ openAnchorElHandbook, setopenAnchorElHandbook }) => {
  const openHandbook = Boolean(openAnchorElHandbook);

  return (
    <Popover
      open={openHandbook}
      anchorEl={openAnchorElHandbook}
      onClose={() => setopenAnchorElHandbook(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ListItemButton>
        <ListItemText primary="Quản lý cẩm nang" />
      </ListItemButton>
    </Popover>
  );
};
