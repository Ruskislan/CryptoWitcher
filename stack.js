class Stack
  # init stack 
  def initialize
    @set = Array.new() 
  end
  # put a new item at the end of the stack 
  def push(x)
    @set.push x
  end
  # get the last item in the stack
  def grab
    @set.pop
  end
  # is the set empty true false bool 
  def empty?
    @set.empty?
  end
end
# implemented stack 
s = Stack.new
s.push 'a' 
s.push 'b'
s.push 'c' 
s.inspect #<Stack:0x48b66454 @set=["a", "b", "c"]> 
puts s.grab # "c" 
puts s.grab # "b" 
puts s.grab # "a" 
s.grab.inspect # nil
