require 'pry'
class RoomController < ApplicationController
  def new
    @room = Room.new(room_params)
  end

  def create

    @room = Room.create(name: params[:roomname], home_id: params[:houseId])
    #@room = Room.new(name: params[:roomname])
    #@room.save
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

  private
    def room_params
      params.require(:room).permit(:name, :user_id, :home_id)
    end

end
