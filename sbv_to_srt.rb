def get_arg(index)
  unless ARGV[index]
    puts "#{$0} sbv_file_input srt_file_output"
    exit 1
  end
  ARGV[index]
end

def convert_sbv_to_srt(sbv_content)
  i = 1
  # add number before each sub
  output = "1\n" + sbv_content.gsub(/\n\n(?=\d)/) { |_| "\n\n#{i += 1}\n" }

  #convert timestamp formats
  output = output.gsub(/([0-9]{1}):([0-9]{2}):([0-9]{2}).([0-9]{3}),([0-9]{1}):([0-9]{2}):([0-9]{2}).([0-9]{3})/, '0\1:\2:\3,\4 --> 0\5:\6:\7,\8')
  output = output.gsub(/^\n\n/, "")
end

sbv_file = get_arg(0)
srt_file = get_arg(1)

input = File.open(sbv_file, "rb").read
output = convert_sbv_to_srt(input)
File.open(srt_file, 'w') {|f| f.write(output) }
