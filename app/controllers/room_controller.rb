require 'pry'
class RoomController < ApplicationController


  def create
    binding.pry
    @room = Room.new(name: params[:roomname])
    @room.save
    render json:@room
  end

  def delete
  end

  def index
    binding.pry
    @rooms = Room.all
    render json:@rooms
  end

  def edit
  end



end
