echo $1
echo $2

ffmpeg -loop 1 -i tiny.jpg -i "$1" -c:v libx264 -c:a copy -shortest "$2"
