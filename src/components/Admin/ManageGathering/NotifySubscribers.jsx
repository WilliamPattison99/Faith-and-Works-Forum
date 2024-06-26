
import "./styles/NotifySubscribers.css";
import { useState } from "react"
import Footer from "../../_global/Footer"
import { TextField, Stack,Button, RadioGroup, Radio, FormControlLabel, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert, Divider } from "@mui/material";
import { ArrowBack, Check, Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



export default function EmailSubscribers() {

    const [emailContent, setEmailContent] = useState('');

    //current_event | all_subscribers
    const [audience, setAudience] = useState('current_event');
    const [emailSubject, setEmailSubject] = useState('');

    const navigate = useNavigate();

    const [openProceedDialog, setOpenProceedDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(true);

    const [sendingEmails, setSendingEmails] = useState(false);
    const [emailError, setEmailError] = useState(false);


    /**
     * @description connect to the api to send email informatin.
     */
    async function handleSubmit() {
        console.log('submitting email');
        setOpenProceedDialog(false);
        setOpenSnackbar(true);
    }



    return (
        <>
            <Dialog
                open={openProceedDialog}
                onClose={()=> setOpenProceedDialog(false)}
            >
                <DialogTitle>
                    Proceed to Send Email?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>This is your last chance to review what will be sent.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        onClick={handleSubmit}
                        size="small"
                        color="success"
                        endIcon={<Check/>}
                    >
                        Proceed
                    </Button>
                    <Button
                        variant="contained"
                        onClick={()=> setOpenProceedDialog(false)}
                        size="small"
                        color='error'
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={openSnackbar}
                anchorOrigin={{horizontal:'center', vertical:'bottom'}}
                autoHideDuration={4000}
                onClose={()=> setOpenSnackbar(false)}
            >
                {
                    emailError ? (
                        <Alert
                            severity='error'
                        >
                        Error sending emails, please check connection or contact IT
                        </Alert>
                    ):(
                        <Alert
                            severity="success"
                        >
                            Emails have been successfully sent!
                        </Alert>
                    )
                }
            </Snackbar>
                <div className="es-main-container">
                    <div className="es-mail-content">
                        <div className="es-mail-header">
                            <p className="text mail-header-text">Email Subscribers</p>
                            <p className="text mail-header-description">Notify your subscribers here of any update or change that is going to take place.</p>
                            <Divider sx={{mt:2}}/>
                        </div>
                        <div className="es-mail-body">
                            <TextField
                                onChange={(e)=> setEmailSubject(e.target.value)}
                                fullWidth
                                placeholder="ex: Update in the gathering time & place"
                                label={"Subject"}
                                value={emailSubject}
                                size="small"
                                sx={{mb: 2}}
                                required
                            />
                            <TextField 
                                multiline 
                                onChange={(e)=> setEmailContent(e.target.value)}
                                value={emailContent}
                                placeholder="Email Content goes here. This can be announcements, changes in dates, etc."
                                label="Email Content"
                                rows={10}
                                fullWidth
                                required
                            />
                        </div>
                        <p className="text mail-header-audience">Audience</p>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={e=> console.log(e.target.value)}
                        >
                            <FormControlLabel 
                                value="current_event" 
                                control={<Radio />} 
                                label="Subscribers for current event" 
                            />
                            <FormControlLabel 
                                value="all_subscribers" 
                                control={<Radio />} 
                                label="All subscribers" 
                            />
                        </RadioGroup>
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            marginTop={'20px'}
                        >
                            <Button
                                endIcon={<Email/>}
                                disabled={emailContent.trim() === ''}
                                onClick={()=> setOpenProceedDialog(true)}
                            >
                                Notify
                            </Button>
                        </Stack>
                    </div>
                </div>
        </>
    )
}