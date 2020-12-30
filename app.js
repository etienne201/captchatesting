var loginController = Ext.create('Ext.app.ViewController', {
    alias: 'controller.login',
    onLogin: function () {
        var form = this.getView();
        if (form.validate()) {
            Ext.Msg.alert('Login Success', 'You have been logged in!');
        } else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    }
});
 
var loginViewModel = Ext.create('Ext.app.ViewModel', {
    alias: 'viewmodel.login',
});
 
Ext.create({
    renderTo: document.body,
    xtype: 'formpanel',
    controller: loginController,
    viewModel: loginViewModel,
    title: 'Form login example',
 
    bodyPadding: 20,
    width: 500,
 
    bbar: ['->', {
        text: 'Login',
        handler: 'onLogin'
    }],
 
    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User ID',
        name: 'user',
        placeholder: 'user id',
        errorTip: {
            anchor: true,
            align: 'l-r?'
        },
        errorTarget: 'under'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        placeholder: 'password',
        errorTip: {
            anchor: true,
            align: 'l-r?'
        },
        errorTarget: 'under',
        validators: function (value) {
            return /^[a-zA-Z]{8,}$/.test(value) ? true : 'Your password must contain at least 8 characters';
        }
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }]
 
});
var registerController = Ext.create('Ext.app.ViewController', {
    alias: 'controller.register',
    onRegister: function () {
        var form = this.getView();
        if (form.validate()) {
            let data = "";
            for (let value of Object.entries(form.getValues())) {
                data += value + '<br>';
                data = data.replace(',', ':');
            }
            Ext.Msg.alert('Login Success', data);
 
        } else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    }
});
 
var registerViewModel = Ext.create('Ext.app.ViewModel', {
    alias: 'viewmodel.register',
});
 
Ext.create({
    renderTo: document.body,
    xtype: 'formpanel',
    controller: registerController,
    viewModel: registerViewModel,
    title: 'Register form example',
    bodyPadding: 20,
    scrollable: 'y',
    width: 500,
    autoSize: true,
 
    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        defaultType: 'passwordfield',
        defaults: {
            required: true
        },
        items: [{
            xtype: 'textfield',
            label: 'User ID',
            name: 'user',
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under'
        }, {
            label: 'Password',
            name: 'pass',
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under'
        }, {
            label: 'Verify',
            name: 'pass_verify',
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Contact Information',
        defaultType: 'textfield',
        margin: '20 0 0',
        items: [
        /*{
            label: 'First Name',
            name: 'first'
        }, {
            label: 'Last Name',
            name: 'last'
        }, {
            label: 'Company',
            name: 'company'
        },*/
        {
            xtype: 'emailfield',
            label: 'Email',
            name: 'email',
            allowBlank: false,
            required: true,
            //Email validation
            validators: 'email',
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under',
        }, {
            //Field mask
            label: 'Phone Number',
            name: 'phone',
            inputType: 'tel', // Show phone number input keyboard
            autoComplete: true,
            autoHideInputMask: false,
            inputMask: '(999) 999-9999'
        }, {
            xtype: 'datepickerfield',
            label: 'Date of Birth',
            name: 'dob',
            //Max value validation
            maxValue: new Date()
        }, {
            //Multiple selection
            xtype: 'selectfield',
            label: 'Skills',
            name: 'skills',
            multiSelect: true,
            autoSelect: false,
            clearable: true,
            options: [
                'ExtJS',
                'Javascript',
                'CSS',
                'Git',
                'Java',
                'PHP',
                'COBOL',
                'Node.js',
                'JSON',
                'HTML5',
                'RIA',
                'OOP',
                'Scrum',
                'REST',
                'MVC'
            ],
            chipView: {
                plugins: {
                    dataviewtip: {
                        align: 'tl-br',
                        constrainToView: false,
                        delegate: '.x-close-el',
                        allowOver: true,
                        anchor: false,
                        anchorToTarget: false,
                        bind: '{record}',
                        tpl: 'Remove skill {text}'
                    }
                }
            }
        }, {
            //Upload file
            xtype: 'filefield',
            label: 'Profile pic',
            name: 'pic'
        }]
    }],
 
    buttons: [{
        text: 'Register',
        handler: 'onRegister'
    }]
 
});
 