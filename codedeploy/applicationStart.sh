#!/bin/bash

# echo "Excute user data"
# sudo /var/lib/cloud/instance/scripts/part-001

echo "Start frontendCode "
sudo nohup serve -s /home/ubuntu/frontendCode/build -l 80 >/dev/null 2>&1 &

#echo "Start cloud watch"
# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/home/ubuntu/infrastructure.json

# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/home/ubuntu/app.json

# sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/home/ubuntu/matrics.json