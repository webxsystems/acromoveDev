import express from 'express';
import {execSync} from "child_process";

const router = express.Router();
// const sudo = require('sudo-js');
// sudo.setPassword('12345');
// var execSync = require('child_process').execSync;

// let resp = "";
router.get('/', (req, res, next) => {
    res.send(`
    <p>API Endpoints</p>
        <ul>
          <li>Physical Disk Management/</li><
          <li>/api/disk/</li>
          <ul>                                                                                                                                                                                                                                                                                                                                                         
                <li>/api/disk/info</li>
                <li>/api/disk/info/id/re</li>
          </ul>
          <ul>
          
          <li>Volume Set Management</LI>
          <li>/api/vol/</li>
          <ul>
                <li>/api/vol/info</li>
</ul>
          <li>/api/raid/</li>
          <ul>
                <li>/api/raid/info</li>
                <li>/api/raid/create</li>
</ul>
          <li>/api/disk/</li>
          <ul>                                                                                                                                                                                                                                                                                                                                                         
                <li>/api/disk/info</li>
                
                <li>/api/disk/info/id/re</li>
          </ul>
          <li>/api/net/</li>
          <li>/api/hw/</li>
          <li>/api/mail/</li>
          <li>/api/sys/</li>
        </ul>   
   `)
});

router.get('/disks' , (req, res, next) => {
//router.get('/disk/info' , (req, res, next) => {

    console.log("-- get/disks --");
    // var resp = require('../src/44/Disk/DiskInfo.js');
    // const cmd = "echo 12345 | sudo -S ./home/webmaster/api/linuxcli_V1.12.0_130321/64/cli64 disk info";
    const cmd = "echo 12345 | sudo -S cli64 disk info";

    // const command = ['./root/cli64', 'disk', 'info'];
    // sudo.exec(command, function( err, pid, result) {
    //     console.log(result);
    // })
    var child = execSync(cmd);

    console.log('resp : ' + child)
    const resp = JSON.stringify(child);
    res.json({
        //console.log(resp);
        response: resp
        //    response: posts
    });
});

router.get('/raid' , (req, res, next) => {
//router.get('/disk/info' , (req, res, next) => {

    console.log("-- get/raid --");
    // var resp = require('../src/44/Disk/DiskInfo.js');
    // const cmd = "echo 12345 | sudo -S ./home/webmaster/api/linuxcli_V1.12.0_130321/64/cli64 disk info";
    const cmd = "echo 12345 | sudo -S cli64 rsf info";

    // const command = ['./root/cli64', 'disk', 'info'];
    // sudo.exec(command, function( err, pid, result) {
    //     console.log(result);
    // })
    var child = execSync(cmd);

    console.log('resp : ' + child)
    const resp = JSON.stringify(child);
    res.json({
        //console.log(resp);
        response: resp
        //    response: posts
    });e
});

router.get('/vol' , (req, res, next) => {
//router.get('/disk/info' , (req, res, next) => {

    console.log("-- get/vol --");
    // var resp = require('../src/44/Disk/DiskInfo.js');
    // const cmd = "echo 12345 | sudo -S ./home/webmaster/api/linuxcli_V1.12.0_130321/64/cli64 disk info";
    const cmd = "echo 12345 | sudo -S cli64 vsf info";

    // const command = ['./root/cli64', 'disk', 'info'];
    // sudo.exec(command, function( err, pid, result) {
    //     console.log(result);
    // })
    var child = execSync(cmd);

    console.log('resp : ' + child)
    const resp = JSON.stringify(child);
    res.json({
        //console.log(resp);
        response: resp
        //    response: posts
    });
});


router.get('/post/:id', (req, res, next) => {
    const {params: {id}} = req;

    const singlePost = posts.find(post => post.id === Number(id));

    if (!singlePost) {
        res.send({
            "error": true,
            "message": ''
        })
    }

    res.json({
        response: [singlePost]
    });
});

export default router;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
//module.exports = router;

