import { AppBar, makeStyles, Tab, Tabs } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useState } from "react";
import { cssPreview, htmlPreview, jsPreview } from "../constants/constants";
import { useEditor } from "../context/AppContext";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

// Individual panel
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      className="h-4/5"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161A23",
    shadow: "0",
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    color: "#EFEDE6",
    "&:focus": {
      outline: "none",
    },
  },
}));

const Preview = () => {
  const classes = useStyles();
  const { theme } = useEditor();

  const [value, setValue] = useState(0);
  const [html, setHtml] = useState(htmlPreview);
  const [css, setCss] = useState(cssPreview);
  const [js, setJs] = useState(jsPreview);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <div>
      <AppBar position="static">
        {/* Tabs for different languages */}
        <Tabs
          classes={{ indicator: classes.indicator, root: classes.root }}
          value={value}
          onChange={handleChange}
          aria-label="language view tabs"
          variant="fullWidth"
        >
          {/* Tab titles */}
          <Tab className={classes.tab} label="HTML" {...a11yProps(0)} />
          <Tab className={classes.tab} label="CSS" {...a11yProps(1)} />
          <Tab className={classes.tab} label="JS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* HTML Tab Content */}
      <TabPanel value={value} index={0}>
        <Editor
          language="html"
          theme={theme}
          code={html}
          setCode={setHtml}
          forPreview={true}
        />
      </TabPanel>

      {/* CSS Tab Content */}
      <TabPanel value={value} index={1}>
        <Editor
          language="css"
          theme={theme}
          code={css}
          setCode={setCss}
          forPreview={true}
        />
      </TabPanel>

      {/* JS Tab Content */}
      <TabPanel value={value} index={2}>
        <Editor
          language="javascript"
          theme={theme}
          code={js}
          setCode={setJs}
          forPreview={true}
        />
      </TabPanel>
    </div>
  );
};

export default Preview;
