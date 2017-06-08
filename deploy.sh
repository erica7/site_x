#!/bin/bash
rsync -avr -f '- .*' -f '- README.md' -f '- deploy.sh' ./ ericaxco@ericax.com:~/static_site/
