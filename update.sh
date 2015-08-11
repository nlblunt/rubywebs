#!/bin/bash
clear
echo "Updating working files"
sudo git pull origin master

echo "Rebuilding assets"
sudo rake assets:clobber
sudo rake assets:precompile

echo "Updating completed"
sudo /etc/init.d/apache2 restart
echo "Apache restarted"
