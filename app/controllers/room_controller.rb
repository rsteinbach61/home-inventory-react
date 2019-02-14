require 'pry'
class RoomController < ApplicationController


  def create
    @room = Room.new(name: params[:text])
    @room.save
    render json:@room
  end

  def delete
  end

  def index
    @rooms = Room.all
    render json:@rooms
  end

  def edit
  end



end
